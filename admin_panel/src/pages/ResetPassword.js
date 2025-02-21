// import React, { useState } from "react";

// const API_BASE_URL = "http://localhost:5001/api/user";

// const ResetPassword = () => {
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");

//     const handleResetPassword = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await fetch(`${API_BASE_URL}/reset-password`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ token, newPassword: password }),
//             });

//             const data = await response.json();
//             setLoading(false);
//             alert(data.message || "Password reset successful. Please log in.");
//             window.location.href = "/auth";
//         } catch (error) {
//             setLoading(false);
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     return (
//         <form onSubmit={handleResetPassword}>
//             <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
//             <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
//             <button type="submit" disabled={loading}>{loading ? "Resetting..." : "Reset Password"}</button>
//         </form>
//     );
// };

// export default ResetPassword;


//---------------------------------------

// import React, { useState } from "react";

// const ResetPassword = () => {
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");



//     const handleResetPassword = async (e) => {
//         e.preventDefault();
    
//         if (password !== confirmPassword) {
//             alert("⚠️ Passwords do not match!");
//             return;
//         }
    
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");  // ✅ Extract token from URL
    
//         try {
//             const response = await fetch("http://localhost:5001/api/user/reset-password", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ token, newPassword: password }), // ✅ Send token in request body
//             });
    
//             const data = await response.json();
//             if (response.ok) {
//                 alert("✅ Password reset successful. Please log in.");
//                 window.location.href = "/auth"; // Redirect to login page
//             } else {
//                 alert(data.message || "❌ Reset password request failed.");
//             }
//         } catch (error) {
//             alert("❌ Server error. Please try again.");
//         }
//     };
    

//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h2>Reset Password</h2>
//             <form onSubmit={handleResetPassword}>
//                 <input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Reset Password</button>
//             </form>
//         </div>
//     );
// };

// export default ResetPassword;


import React, { useState } from "react";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // ✅ Extract Token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    // ✅ Handle Password Reset Submission
    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            alert("⚠️ Both fields are required!");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("⚠️ Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/user/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, newPassword }), // ✅ Send the token & new password
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                alert("✅ Password reset successful. Please log in.");
                window.location.href = "/auth"; // Redirect to login page
            } else {
                alert(data.message || "❌ Password reset failed.");
            }
        } catch (error) {
            setLoading(false);
            alert("❌ Server error. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Reset Your Password</h2>

            {loading && <p style={styles.loading}>⏳ Processing...</p>}

            <form onSubmit={handleResetPassword} style={styles.form}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button} disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </div>
    );
};

// ✅ Simple Styles
const styles = {
    container: {
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    title: {
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        marginBottom: "10px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
    },
    loading: {
        color: "#007BFF",
        fontSize: "14px",
        fontWeight: "bold",
    }
};

export default ResetPassword;
