import React, { useRef } from "react";

function BabyAnimation() {
  const bebeRef = useRef(null);
  

  return (
    <div className="container-baby">
      <svg
      ref={bebeRef}
        width="343"
        height="546"
        viewBox="0 0 343 546"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_baby"
      >
        <g id="baby_body">
          <path
            d="M60.1825 544.343C34.9528 533.628 17.6948 505.531 4.31114 481.738C-6.53335 456.622 3.99872 434.872 25.6419 420.806C-19.2134 368.318 43.0145 295.335 81.1078 270.381C13.5111 177.482 65.3217 80.0872 161.947 64.7302C179.278 63.2109 186.366 59.4486 191.023 49.2974C205.931 26.8126 179.258 5.77491 162.726 31.8177C154.22 44.899 140.526 39.5614 142.344 26.4903C144.093 14.4817 152.197 5.41153 164.52 1.66834C188.447 -5.59914 212.939 11.7443 214.207 36.8526C214.267 52.603 205.51 63.103 205.492 69.0031C292.56 100.622 319.877 208.2 260.146 270.381C306.011 293.395 360.958 371.079 315.612 420.806C327.673 428.578 339.859 443.798 341.831 455.697C345.15 476.544 311.943 527.673 290.585 541.004C262.13 554.466 229.309 537.008 224.01 505.593C223.361 476.356 242.483 435.846 263.427 419.708C262.774 413.159 265.416 394.899 261.056 391.758H80.1974C75.4435 397.985 77.8268 406.245 77.8268 418.897C103.949 421.387 149.929 421.604 176.941 421.501C190.621 423.397 187.491 436.878 178.436 438.345L98.2712 439.975C105.19 459.341 120.194 486.926 117.243 505.593C112.613 533.044 86.5438 550.747 60.1825 544.343ZM96.7627 496.227C96.1198 490.523 81.8076 454.575 77.7259 448.413C47.9894 415.906 2.26252 445.883 23.9394 478.963C27.0147 485.395 51.8712 517.116 55.9085 519.762C76.1798 530.697 98.4914 516.25 96.7627 496.227ZM282.847 521.134C298.868 507.638 325.524 479.927 318.755 456.19C312.556 440.883 297.627 434.015 284.029 435.837C262.235 438.994 250.054 475.59 246.194 490.43C239.16 513.746 263.014 533.24 282.847 521.134ZM72.4934 370.867C72.2961 360.576 73.392 348.845 82.8063 348.497C93.1698 349.011 93.8032 361.792 93.8267 369.845C145.204 369.662 196.582 369.48 247.96 369.297C248.108 359.689 248.995 348.281 259.098 348.343C268.404 347.682 268.772 361.921 268.788 370.364C284.201 385.245 284.721 392.059 284.761 410.364C354.448 394.302 288.023 292.766 242.419 285.828C221.09 299.334 192.672 308.717 170.627 308.988C141.645 306.423 121.131 299.932 98.8356 285.828C69.3407 280.224 -21.6741 400.802 56.4941 410.363C56.9923 390.352 55.1342 382.48 72.4934 370.867ZM233.027 265.895C290.484 220.12 282.22 131.61 217.286 97.3181C188.183 81.9486 153.07 81.9486 123.967 97.3181C59.0337 131.61 50.7692 220.12 108.227 265.895C145.657 294.228 199.904 290.784 233.027 265.895ZM137.56 231.937C138.285 221.512 142.911 220.837 148.36 224.565C164.153 236.597 178.661 232.022 191.952 224.303C198.587 218.771 203.553 226.486 203.693 231.979C199.125 245.823 183.219 251.71 172.392 252.152C159.97 253.536 138.208 242.215 137.56 231.937ZM125.329 172.395C137.984 173.375 153.638 184.397 142.983 194.061C135.548 198.648 131.969 196.386 125.994 192.694C121.352 195.851 114.246 198.207 110.218 195.14C98.9013 182.448 113.879 172.932 125.329 172.395ZM198.27 194.061C189.155 185.917 199.256 172.379 214.515 172.291C228.304 172.212 238.988 182.195 234.502 190.968C227.578 199.223 222.087 196.856 215.259 192.694C209.298 196.651 202.944 198.071 198.27 194.061ZM140.544 543.92C129.787 538.452 112.332 524.058 122.412 513.882C135.855 504.539 137.493 517.717 144.408 522.311C147.683 524.335 149.624 524.497 170.627 524.497C191.63 524.497 193.57 524.336 196.846 522.311C203.564 516.578 209.275 504.79 218.842 513.882C228.583 524.822 208.964 540.754 200.71 543.92C183.222 545.152 157.936 545.913 140.544 543.92ZM213.527 420.102C226.036 415.143 232.01 429.412 225.351 436.415C210.996 445.168 203.192 426.279 213.527 420.102Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
}

export default BabyAnimation;
