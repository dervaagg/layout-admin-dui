// import { useState } from "react";
// import axios from "axios";
// import { FiLock } from "react-icons/fi";
// import { FiMail } from "react-icons/fi";
// import { FiUser } from "react-icons/fi";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const Register = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:4001/register", {
//         name: name,
//         email: email,
//         password: password,
//         confirmPassword: confirmPassword,
//       });
//       window.location.href = "/";
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <>
//       <div>
//         <section className="hero has-background-grey-light is-fullheight is-fullwidth">
//           <div className="hero-body">
//             <div className="container">
//               <div className="columns is-centered">
//                 <div className="column is-4-desktop">
//                   <form onSubmit={Register} className="box">
//                     <p className="has-text-centered"> {message} </p>
//                     <div className="field mt-3">
//                       <label className="label">Name</label>
//                       <div className="controls">
//                         <p className="control has-icons-left">
//                           <input
//                             type="Name"
//                             className="input is-rounded"
//                             placeholder="e.g Admin"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                           />
//                           <span className="icon is-small is-left">
//                             <FiUser />
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="field mt-3">
//                       <label className="label">Email</label>
//                       <div className="controls">
//                         <p className="control has-icons-left">
//                           <input
//                             type="Email"
//                             className="input is-rounded"
//                             placeholder="e.g admin@waskita.co.id"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                           />
//                           <span className="icon is-small is-left">
//                             <FiMail />
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="field mt-3">
//                       <label className="label">Password</label>
//                       <div className="controls">
//                         <p className="control has-icons-left">
//                           <input
//                             type="password"
//                             className="input is-rounded"
//                             placeholder="********"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                           />
//                           <span className="icon is-small is-left">
//                             <FiLock />
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="field mt-3">
//                       <label className="label">Confirm Password</label>
//                       <div className="controls">
//                         <p className="control has-icons-left">
//                           <input
//                             type="password"
//                             className="input is-rounded"
//                             placeholder="********"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                           />
//                           <span className="icon is-small is-left">
//                             <FiLock />
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="field mt-5 mb-3 columns is-centered">
//                       <button className="button is-dark box has-text-centered">
//                         Register
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Register;
