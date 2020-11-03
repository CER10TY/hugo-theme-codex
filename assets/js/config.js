/**
 * Klaro Config for Cookie Consent tracking
 */

var klaroConfig = {
    acceptAll: true,
    apps: [
      {
        name: 'google-analytics',
        translations: {
          zz: {
            title: 'Google Analytics'
          }
        },
        purposes: ['analytics'],
        onlyOnce: true
      }
    ]
  }