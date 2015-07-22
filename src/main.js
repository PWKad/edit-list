export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // Install the plugin
    .plugin('aurelia-animator-css')
    .plugin('aurelia-bs-modal')
    .plugin('bootstrap');;

  aurelia.start().then(a => a.setRoot());
}