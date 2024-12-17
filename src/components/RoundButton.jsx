// import ButtonRoundedSvg from "../assets/svg/ButtonRoundedSvg";

// const RoundButton = ({
//   className = "", // Default empty className
//   href,
//   onClick,
//   children,
//   px = "px-7", // Default padding
//   white = false, // Default text color
//   ariaLabel, // Optional accessibility label
// }) => {
//   // Common classes for both button and link
//   const classes = `button relative inline-flex items-center justify-center h-11 transition-colors ${
//     px
//   } ${white ? "text-n-8" : "text-n-1"} hover:bg-opacity-80 ${className}`;

//   const spanClasses = "relative z-10";

//   // Render <button> element
//   const renderButton = () => (
//     <button
//       className={classes}
//       onClick={onClick}
//       aria-label={ariaLabel || "button"}
//     >
//       <span className={spanClasses}>{children}</span>
//       {ButtonRoundedSvg(white)}
//     </button>
//   );

//   // Render <a> element
//   const renderLink = () => (
//     <a
//       className={classes}
//       href={href}
//       aria-label={ariaLabel || "link"}
//     >
//       <span className={spanClasses}>{children}</span>
//       {ButtonRoundedSvg(white)}
//     </a>
//   );

//   // Return appropriate element
//   return href ? renderLink() : renderButton();
// };

// export default RoundButton;
