import React from 'react';

// import { H5P } from 'h5p-standalone';

// import H5PJson from '../../../../docs/assets/h5p/triad-identification-multiple-clef/h5p.json'

export default function TriadIdentificationMultiPleClef(): JSX.Element {
    
// const el = document.getElementById('h5p-container');
// const options = {
//   h5pJsonPath: {H5PJson},
//   frameJs: '/assets/frame.bundle.js',
//   frameCss: '/assets/styles/h5p.css',
// }

// new H5P.H5P(el, options);


  return (
    // <div id='h5p-container'></div>
    <>
      <iframe src="https://viva.pressbooks.pub/openmusictheory/wp-admin/admin-ajax.php?action=h5p_embed&id=34" width="770" height="592" frameBorder="0" allowFullScreen="allowfullscreen" title="Triad Identification (Multiple Clef Selection)"></iframe><script src="https://viva.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charSet="UTF-8"></script>
    </>
  );
}
