// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [bookings, setBookings] = useState([]);
//   const [demoRequests, setDemoRequests] = useState([]);
//   const [admin, setAdmin] = useState(null);

//   // ✅ Check if Admin is Logged In
//   useEffect(() => {
//     const storedAdmin = localStorage.getItem("admin");
//     if (!storedAdmin) {
//       navigate("/auth");
//     } else {
//       setAdmin(JSON.parse(storedAdmin));
//       fetchBookings();
//       fetchDemoRequests();
//     }
//   }, []);

//   // ✅ Fetch Bookings
//   const fetchBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5001/api/admin/bookings", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     }
//   };

//   // ✅ Fetch Demo Requests
//   const fetchDemoRequests = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5001/api/admin/demo-requests", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setDemoRequests(response.data);
//     } catch (error) {
//       console.error("Error fetching demo requests:", error);
//     }
//   };

//   // ✅ Approve or Reject a Booking
//   const handleBookingStatus = async (id, status) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.patch(`http://localhost:5001/api/admin/bookings/${id}`, { status }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchBookings();
//     } catch (error) {
//       console.error("Error updating booking status:", error);
//     }
//   };

//   // ✅ Approve or Reject a Demo Request
//   const handleDemoStatus = async (id, status) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.patch(`http://localhost:5001/api/admin/demo-requests/${id}`, { status }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchDemoRequests();
//     } catch (error) {
//       console.error("Error updating demo request status:", error);
//     }
//   };

//   // ✅ Logout Admin
//   const handleLogout = () => {
//     localStorage.removeItem("admin");
//     localStorage.removeItem("token");
//     navigate("/auth");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* ✅ Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-6">
//         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//         <ul>
//           <li className="mb-4"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
//           <li className="mb-4"><a href="#" className="hover:text-gray-300">Manage Bookings</a></li>
//           <li className="mb-4"><a href="#" className="hover:text-gray-300">Manage Demo Requests</a></li>
//         </ul>
//         <button onClick={handleLogout} className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
//           Logout
//         </button>
//       </div>

//       {/* ✅ Main Content */}
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-6">Welcome, Admin</h1>

//         {/* ✅ Stats Section */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div className="bg-blue-500 text-white p-6 rounded shadow">
//             <h2 className="text-xl">Total Bookings</h2>
//             <p className="text-3xl">{bookings.length}</p>
//           </div>
//           <div className="bg-green-500 text-white p-6 rounded shadow">
//             <h2 className="text-xl">Total Demo Requests</h2>
//             <p className="text-3xl">{demoRequests.length}</p>
//           </div>
//         </div>

//         {/* ✅ Bookings Table */}
//         <div className="bg-white p-4 rounded shadow mb-6">
//           <h2 className="text-xl font-semibold mb-4">Event Bookings</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Event</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="text-center">
//                   <td className="border p-2">{booking.name}</td>
//                   <td className="border p-2">{booking.event}</td>
//                   <td className="border p-2">{booking.status}</td>
//                   <td className="border p-2">
//                     <button onClick={() => handleBookingStatus(booking._id, "approved")} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
//                       Approve
//                     </button>
//                     <button onClick={() => handleBookingStatus(booking._id, "rejected")} className="bg-red-500 text-white px-3 py-1 rounded">
//                       Reject
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* ✅ Demo Requests Table */}
//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">Demo Requests</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {demoRequests.map((request) => (
//                 <tr key={request._id} className="text-center">
//                   <td className="border p-2">{request.name}</td>
//                   <td className="border p-2">{request.email}</td>
//                   <td className="border p-2">{request.status}</td>
//                   <td className="border p-2">
//                     <button onClick={() => handleDemoStatus(request._id, "approved")} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
//                       Approve
//                     </button>
//                     <button onClick={() => handleDemoStatus(request._id, "rejected")} className="bg-red-500 text-white px-3 py-1 rounded">
//                       Reject
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



//--------------------------------------


// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//     const [demoRequests, setDemoRequests] = useState([]);
//     const [bookings, setBookings] = useState([]);

//     // ✅ Fetch Demo Requests
//     useEffect(() => {
//         fetch("http://localhost:5001/api/admin/demo-requests", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("adminToken")}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => setDemoRequests(data))
//             .catch(error => console.error("❌ Error fetching demo requests:", error));

//         // ✅ Fetch Event Bookings
//         fetch("http://localhost:5001/api/admin/bookings", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("adminToken")}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => setBookings(data))
//             .catch(error => console.error("❌ Error fetching bookings:", error));
//     }, []);

//     // ✅ Approve or Reject a Request
//     const handleAction = (id, type, status) => {
//         const url = type === "demo" 
//             ? `http://localhost:5001/api/admin/demo-requests/${id}`
//             : `http://localhost:5001/api/admin/bookings/${id}`;

//         fetch(url, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("adminToken")}`
//             },
//             body: JSON.stringify({ status })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (type === "demo") {
//                     setDemoRequests(prev => prev.map(req => req._id === id ? { ...req, status } : req));
//                 } else {
//                     setBookings(prev => prev.map(req => req._id === id ? { ...req, status } : req));
//                 }
//             })
//             .catch(error => console.error("❌ Error updating request:", error));
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.header}>Admin Dashboard</h1>

//             {/* ✅ Demo Requests Section */}
//             <div style={styles.section}>
//                 <h2 style={styles.subHeader}>Demo Requests</h2>
//                 <table style={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {demoRequests.map(request => (
//                             <tr key={request._id}>
//                                 <td>{request.name}</td>
//                                 <td>{request.email}</td>
//                                 <td>{request.status}</td>
//                                 <td>
//                                     <button style={styles.approveBtn} onClick={() => handleAction(request._id, "demo", "approved")}>Approve</button>
//                                     <button style={styles.rejectBtn} onClick={() => handleAction(request._id, "demo", "rejected")}>Reject</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* ✅ Event Bookings Section */}
//             <div style={styles.section}>
//                 <h2 style={styles.subHeader}>Event Bookings</h2>
//                 <table style={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Event</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map(booking => (
//                             <tr key={booking._id}>
//                                 <td>{booking.name}</td>
//                                 <td>{booking.email}</td>
//                                 <td>{booking.event}</td>
//                                 <td>{booking.status}</td>
//                                 <td>
//                                     <button style={styles.approveBtn} onClick={() => handleAction(booking._id, "booking", "approved")}>Approve</button>
//                                     <button style={styles.rejectBtn} onClick={() => handleAction(booking._id, "booking", "rejected")}>Reject</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// // ✅ Styling for UI
// const styles = {
//     container: {
//         width: "90%",
//         margin: "auto",
//         textAlign: "center",
//         padding: "20px",
//     },
//     header: {
//         fontSize: "32px",
//         marginBottom: "20px",
//         color: "#007BFF",
//     },
//     section: {
//         marginBottom: "30px",
//         backgroundColor: "#f8f9fa",
//         padding: "15px",
//         borderRadius: "8px",
//         boxShadow: "0 0 10px rgba(0,0,0,0.1)"
//     },
//     subHeader: {
//         fontSize: "24px",
//         marginBottom: "10px",
//         color: "#333",
//     },
//     table: {
//         width: "100%",
//         borderCollapse: "collapse",
//         marginTop: "10px",
//     },
//     approveBtn: {
//         padding: "8px 12px",
//         backgroundColor: "#28a745",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         marginRight: "5px"
//     },
//     rejectBtn: {
//         padding: "8px 12px",
//         backgroundColor: "#dc3545",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer"
//     },
//     th: {
//         borderBottom: "2px solid #ddd",
//         padding: "10px",
//         textAlign: "left",
//         backgroundColor: "#007BFF",
//         color: "#fff"
//     },
//     td: {
//         borderBottom: "1px solid #ddd",
//         padding: "10px",
//         textAlign: "left",
//     }
// };

// export default Dashboard;


//-------------------------------------------------

import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [demoRequests, setDemoRequests] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch Demo Requests & Bookings when page loads
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
                const bookingRes = await fetch("http://localhost:5001/api/admin/bookings", {
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

            const data = await response.json();
            if (response.ok) {
                alert(`Successfully ${status} ${type}!`);
                window.location.reload(); // Refresh to update list
            } else {
                alert(data.message || "Action failed!");
            }
        } catch (error) {
            console.error("Action error:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Admin Dashboard</h2>

            {loading ? <p>Loading...</p> : (
                <>
                    <div style={styles.section}>
                        <h3>📌 Demo Requests</h3>
                        {demoRequests.length > 0 ? demoRequests.map(request => (
                            <div key={request._id} style={styles.card}>
                                <p><strong>Name:</strong> {request.name}</p>
                                <p><strong>Email:</strong> {request.email}</p>
                                <p><strong>Message:</strong> {request.message}</p>
                                <p><strong>Status:</strong> {request.status}</p>
                                <button style={styles.approveBtn} onClick={() => handleAction("demo-requests", request._id, "approved")}>Approve</button>
                                <button style={styles.rejectBtn} onClick={() => handleAction("demo-requests", request._id, "rejected")}>Reject</button>
                            </div>
                        )) : <p>No demo requests found.</p>}
                    </div>

                    <div style={styles.section}>
                        <h3>📅 Event Bookings</h3>
                        {bookings.length > 0 ? bookings.map(booking => (
                            <div key={booking._id} style={styles.card}>
                                <p><strong>Name:</strong> {booking.name}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Event:</strong> {booking.event}</p>
                                <p><strong>Status:</strong> {booking.status}</p>
                                <button style={styles.approveBtn} onClick={() => handleAction("bookings", booking._id, "approved")}>Approve</button>
                                <button style={styles.rejectBtn} onClick={() => handleAction("bookings", booking._id, "rejected")}>Reject</button>
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
    }
};

export default Dashboard;
