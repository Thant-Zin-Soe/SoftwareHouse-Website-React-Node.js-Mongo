// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [mode, setMode] = useState("login"); // "login", "forgot", "reset"
//     const navigate = useNavigate();

//     // ✅ API URLs
//     const API_BASE_URL = "http://localhost:5001/api/user";

//     // ✅ Handle Login Request
//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${API_BASE_URL}/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem("adminToken", data.token);
//                 // navigate("/dashboard"); // Redirect to admin dashboard
//                 window.location.href = "http://localhost:3001/dashboard";

//             } else {
//                 alert(data.message || "❌ Login failed");
//             }
//         } catch (error) {
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     // ✅ Handle Forgot Password Request
//     const handleForgotPassword = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${API_BASE_URL}/forgot-password`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email }),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert("✅ Password reset link sent to your email.");
//                 setMode("login");
//             } else {
//                 alert(data.message || "❌ Forgot password request failed.");
//             }
//         } catch (error) {
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     // ✅ Handle Reset Password Request
//     const handleResetPassword = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert("⚠️ Passwords do not match!");
//             return;
//         }

//         try {
//             const response = await fetch(`${API_BASE_URL}/reset-password`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert("✅ Password reset successful. Please log in.");
//                 setMode("login");
//             } else {
//                 alert(data.message || "❌ Reset password request failed.");
//             }
//         } catch (error) {
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>
//                 {mode === "login" ? "Admin Login" :
//                     mode === "forgot" ? "Forgot Password" :
//                         "Reset Password"}
//             </h2>

//             {mode === "login" && (
//                 <form onSubmit={handleLogin} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button}>Login</button>
//                     <p style={styles.link} onClick={() => setMode("forgot")}>Forgot Password?</p>
//                 </form>
//             )}

//             {mode === "forgot" && (
//                 <form onSubmit={handleForgotPassword} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button}>Send Reset Link</button>
//                     <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
//                 </form>
//             )}

//             {mode === "reset" && (
//                 <form onSubmit={handleResetPassword} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="New Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button}>Reset Password</button>
//                     <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
//                 </form>
//             )}
//         </div>
//     );
// };

// // ✅ Simple Styles
// const styles = {
//     container: {
//         width: "350px",
//         margin: "50px auto",
//         padding: "20px",
//         boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//         textAlign: "center",
//     },
//     title: {
//         marginBottom: "20px",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     input: {
//         marginBottom: "10px",
//         padding: "8px",
//         fontSize: "16px",
//     },
//     button: {
//         padding: "10px",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         fontSize: "16px",
//     },
//     link: {
//         marginTop: "10px",
//         color: "#007BFF",
//         cursor: "pointer",
//         fontSize: "14px",
//     }
// };

// export default Auth;

//----------------------------------------------
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [mode, setMode] = useState("login"); // "login", "forgot", "reset"
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const API_BASE_URL = "http://localhost:5001/api/user"; // ✅ Ensure backend is running

//     // ✅ Handle Login Request
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const response = await fetch(`${API_BASE_URL}/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             setLoading(false);

//             if (response.ok) {
//                 localStorage.setItem("adminToken", data.token);
//                 window.location.href = "http://localhost:3001/dashboard"; // ✅ Correct redirect
//             } else {
//                 alert(data.message || "❌ Login failed");
//             }
//         } catch (error) {
//             setLoading(false);
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     // ✅ Handle Forgot Password Request
//     const handleForgotPassword = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const response = await fetch(`${API_BASE_URL}/forgot-password`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email }),
//             });

//             const data = await response.json();
//             setLoading(false);

//             if (response.ok) {
//                 alert("✅ Password reset link sent to your email.");
//                 setMode("login");
//             } else {
//                 alert(data.message || "❌ Forgot password request failed.");
//             }
//         } catch (error) {
//             setLoading(false);
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     // ✅ Handle Reset Password Request
//     const handleResetPassword = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         if (password !== confirmPassword) {
//             alert("⚠️ Passwords do not match!");
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await fetch(`${API_BASE_URL}/reset-password`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             setLoading(false);

//             if (response.ok) {
//                 alert("✅ Password reset successful. Please log in.");
//                 setMode("login");
//             } else {
//                 alert(data.message || "❌ Reset password request failed.");
//             }
//         } catch (error) {
//             setLoading(false);
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>
//                 {mode === "login" ? "Admin Login" :
//                     mode === "forgot" ? "Forgot Password" :
//                         "Reset Password"}
//             </h2>

//             {loading && <p style={styles.loading}>⏳ Processing...</p>}

//             {mode === "login" && (
//                 <form onSubmit={handleLogin} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button} disabled={loading}>
//                         {loading ? "Logging in..." : "Login"}
//                     </button>
//                     <p style={styles.link} onClick={() => setMode("forgot")}>Forgot Password?</p>
//                 </form>
//             )}

//             {mode === "forgot" && (
//                 <form onSubmit={handleForgotPassword} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button} disabled={loading}>
//                         {loading ? "Sending..." : "Send Reset Link"}
//                     </button>
//                     <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
//                 </form>
//             )}

//             {mode === "reset" && (
//                 <form onSubmit={handleResetPassword} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="New Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button} disabled={loading}>
//                         {loading ? "Resetting..." : "Reset Password"}
//                     </button>
//                     <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
//                 </form>
//             )}
//         </div>
//     );
// };

// // ✅ Simple Styles
// const styles = {
//     container: {
//         width: "350px",
//         margin: "50px auto",
//         padding: "20px",
//         boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//         textAlign: "center",
//     },
//     title: {
//         marginBottom: "20px",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     input: {
//         marginBottom: "10px",
//         padding: "10px",
//         fontSize: "16px",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//     },
//     button: {
//         padding: "10px",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         fontSize: "16px",
//     },
//     link: {
//         marginTop: "10px",
//         color: "#007BFF",
//         cursor: "pointer",
//         fontSize: "14px",
//     },
//     loading: {
//         color: "#007BFF",
//         fontSize: "14px",
//         fontWeight: "bold",
//     }
// };

// export default Auth;

//--------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [mode, setMode] = useState("login"); // Modes: "login", "forgot", "reset"
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     // ✅ Admin API Endpoint (Ensure backend is running)
//     const API_BASE_URL = "http://localhost:5001/api/user"; 

//     // ✅ Handle Admin Login
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const response = await fetch(`${API_BASE_URL}/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             setLoading(false);

//             if (response.ok) {
//                 localStorage.setItem("adminToken", data.token);
//                 window.location.href = "http://localhost:3001/dashboard"; // ✅ Redirect to Admin Dashboard
//             } else {
//                 alert(data.message || "❌ Login failed");
//             }
//         } catch (error) {
//             setLoading(false);
//             alert("❌ Server error. Please try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>
//                 {mode === "login" ? "Admin Login" :
//                     mode === "forgot" ? "Forgot Password" :
//                         "Reset Password"}
//             </h2>

//             {loading && <p style={styles.loading}>⏳ Processing...</p>}

//             {mode === "login" && (
//                 <form onSubmit={handleLogin} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.button} disabled={loading}>
//                         {loading ? "Logging in..." : "Login"}
//                     </button>
//                     <p style={styles.link} onClick={() => setMode("forgot")}>Forgot Password?</p>
//                 </form>
//             )}
//         </div>
//     );
// };

// // ✅ Improved Styles
// const styles = {
//     container: {
//         width: "350px",
//         margin: "50px auto",
//         padding: "20px",
//         boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//         textAlign: "center",
//     },
//     title: {
//         marginBottom: "20px",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     input: {
//         marginBottom: "10px",
//         padding: "10px",
//         fontSize: "16px",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//     },
//     button: {
//         padding: "10px",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         fontSize: "16px",
//     },
//     link: {
//         marginTop: "10px",
//         color: "#007BFF",
//         cursor: "pointer",
//         fontSize: "14px",
//     },
//     loading: {
//         color: "#007BFF",
//         fontSize: "14px",
//         fontWeight: "bold",
//     }
// };

// export default Auth;
//---------------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mode, setMode] = useState("login"); // Modes: "login", "forgot", "reset"
    const [loading, setLoading] = useState(false);
    const [resetToken, setResetToken] = useState(""); // Holds reset token for password reset
    const navigate = useNavigate();

    const API_BASE_URL = "http://localhost:5001/api/user"; // ✅ Ensure backend is running

    // ✅ Handle Admin Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                localStorage.setItem("adminToken", data.token);
                window.location.href = "http://localhost:3001/dashboard"; // ✅ Redirect to Admin Dashboard
            } else {
                alert(data.message || "❌ Login failed");
            }
        } catch (error) {
            setLoading(false);
            alert("❌ Server error. Please try again.");
        }
    };

    // ✅ Handle Forgot Password Request (Send Reset Link)
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                alert(`✅ Reset link sent to your email.\nUse token: ${data.resetToken}`);
                setResetToken(data.resetToken); // Save reset token for next step
                setMode("reset");
            } else {
                alert(data.message || "❌ Forgot password request failed.");
            }
        } catch (error) {
            setLoading(false);
            alert("❌ Server error. Please try again.");
        }
    };

    // ✅ Handle Reset Password Request
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            alert("⚠️ Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: resetToken, newPassword: password }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                alert("✅ Password reset successful. Please log in.");
                setMode("login");
            } else {
                alert(data.message || "❌ Reset password request failed.");
            }
        } catch (error) {
            setLoading(false);
            alert("❌ Server error. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>
                {mode === "login" ? "Admin Login" :
                    mode === "forgot" ? "Forgot Password" :
                        "Reset Password"}
            </h2>

            {loading && <p style={styles.loading}>⏳ Processing...</p>}

            {mode === "login" && (
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <p style={styles.link} onClick={() => setMode("forgot")}>Forgot Password?</p>
                </form>
            )}

            {mode === "forgot" && (
                <form onSubmit={handleForgotPassword} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                    <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
                </form>
            )}

            {mode === "reset" && (
                <form onSubmit={handleResetPassword} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Reset Token"
                        value={resetToken}
                        onChange={(e) => setResetToken(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <p style={styles.link} onClick={() => setMode("login")}>Back to Login</p>
                </form>
            )}
        </div>
    );
};

// ✅ Improved Styles
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
    link: {
        marginTop: "10px",
        color: "#007BFF",
        cursor: "pointer",
        fontSize: "14px",
    },
    loading: {
        color: "#007BFF",
        fontSize: "14px",
        fontWeight: "bold",
    }
};

export default Auth;
