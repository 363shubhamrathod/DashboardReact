const LogoSVG = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="12" fill="#3F8CFF" />
      <mask id="mask0_1_187" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
        <rect width="50" height="50" rx="12" fill="white" />
      </mask>
      <g mask="url(#mask0_1_187)">
        {/* Add your masked content here */}
      </g>
    </svg>
  );
  
  export default LogoSVG;
  