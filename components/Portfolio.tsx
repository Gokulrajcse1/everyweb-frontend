// const projects = [
//   {
//     title: "E-Commerce Website",
//     category: "Web Development",
//   },
//   {
//     title: "Corporate Business Site",
//     category: "UI/UX Design",
//   },
//   {
//     title: "Digital Marketing Campaign",
//     category: "Marketing",
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
//             Portfolio
//           </p>
//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             Recent Projects
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             A few examples of the websites and digital experiences we have
//             created for our clients.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               <div className="flex h-56 items-center justify-center bg-gray-200 text-gray-500">
//                 Project Preview
//               </div>

//               <div className="p-6">
//                 <p className="text-sm font-medium text-gray-500">
//                   {project.category}
//                 </p>

//                 <h3 className="mt-2 text-2xl font-semibold">
//                   {project.title}
//                 </h3>

//                 <button className="mt-6 font-semibold text-black underline underline-offset-4">
//                   View Project
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }