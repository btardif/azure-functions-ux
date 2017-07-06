import 'core-js/es6/symbol';

// http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

declare global {

  interface String {
    /**
   * Formats a string based on its key value pair object.
   *
   * @param args The list of arguments format arguments. For example: "String with params {0} and {1}".format("val1", "val2");.
   * @return Formatted string.
   */
    format(...restArgs: any[]): string;
  }
}