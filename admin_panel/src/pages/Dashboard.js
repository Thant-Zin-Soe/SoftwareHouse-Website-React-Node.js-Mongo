import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [demoRequests, setDemoRequests] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch Demo Requests & Event Bookings when page loads
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("adminToken");
                if (!token) {
                    alert("Unauthorized! Please log in.");
                    window.location.href = "/auth";
                    return;
                }

                const demoRes = await fetch("http://localhost:5001/api/admin/demo-requests", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const bookingRes = await fetch("http://localhost:5001/api/admin/event-registrations", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const demoData = await demoRes.json();
                const bookingData = await bookingRes.json();

                setDemoRequests(demoData);
                setBookings(bookingData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ✅ Handle Approval/Rejection
    const handleAction = async (type, id, status) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:5001/api/admin/${type}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                alert(`Successfully ${status} ${type}!`);
                window.location.reload(); // Refresh to update list
            } else {
                const data = await response.json();
                alert(data.message || "Action failed!");
            }
        } catch (error) {
            console.error("Action error:", error);
        }
    };

    // ✅ Handle Delete Request
    const handleDelete = async (type, id) => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;

        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:5001/api/admin/${type}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                alert(`Successfully deleted ${type}!`);
                window.location.reload(); // Refresh UI
            } else {
                const data = await response.json();
                alert(data.message || "Deletion failed!");
            }
        } catch (error) {
            console.error("Error deleting record:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Admin Dashboard</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div style={styles.section}>
                        <h3>📌 Demo Requests</h3>
                        {demoRequests.length > 0 ? demoRequests.map(request => (
                            <div key={request._id} style={styles.card}>
                                <p><strong>Name:</strong> {request.name}</p>
                                <p><strong>Email:</strong> {request.email}</p>
                                <p><strong>Message:</strong> {request.message}</p>
                                <p><strong>Service:</strong> {request.serviceName}</p>
                                <p><strong>Status:</strong> {request.status}</p>
                                <button style={styles.approveBtn} onClick={() => handleAction("demo-requests", request._id, "approved")}>Approve</button>
                                <button style={styles.rejectBtn} onClick={() => handleAction("demo-requests", request._id, "rejected")}>Reject</button>
                                <button style={styles.deleteBtn} onClick={() => handleDelete("demo-requests", request._id)}>Delete</button>
                            </div>
                        )) : <p>No demo requests found.</p>}
                    </div>

                    <div style={styles.section}>
    <h3>📅 Event Bookings</h3>
    {bookings.length > 0 ? bookings.map(booking => (
        <div key={booking._id} style={styles.card}>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Event:</strong> {booking.eventId?.name ?? "No Event Name"}</p> {/* ✅ Corrected display */}
            <p><strong>Message:</strong> {booking.message}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <button style={styles.approveBtn} onClick={() => handleAction("event-registrations", booking._id, "approved")}>Approve</button>
            <button style={styles.rejectBtn} onClick={() => handleAction("event-registrations", booking._id, "rejected")}>Reject</button>
            <button style={styles.deleteBtn} onClick={() => handleDelete("event-registrations", booking._id)}>Delete</button>
        </div>
    )) : <p>No event bookings found.</p>}
</div>

                </>
            )}
        </div>
    );
};

// ✅ Basic Styling
const styles = {
    container: {
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
    },
    section: {
        marginBottom: "20px",
    },
    card: {
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "6px",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        marginBottom: "10px",
    },
    approveBtn: {
        backgroundColor: "green",
        color: "white",
        padding: "8px",
        marginRight: "5px",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    },
    rejectBtn: {
        backgroundColor: "red",
        color: "white",
        padding: "8px",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    },
    deleteBtn: {
        backgroundColor: "black",
        color: "white",
        padding: "8px",
        marginLeft: "5px",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    }
};

export default Dashboard;
