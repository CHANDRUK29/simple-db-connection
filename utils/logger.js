/* eslint-disable no-console */
class Logger {
  constructor(level = 0, timestamps = true, colors = true) {
    this.level = level;
    this.timestamps = timestamps;
    this.colors = colors;
  }

  paramsFormatter(params) {
    this.params = params.map((p) => ((typeof p) === 'object' ? JSON.stringify(p) : p));
    return this.params.join(' ');
  }

  logTypeFormatter(type) {
    let text = '';
    if (this.colors) {
      switch (type) {
        case 'ERROR':
          text = '\x1b[31m';
          break;
        case 'WARN':
          text = '\x1b[33m';
          break;
        case 'INFO':
          text = '\x1b[34m';
          break;
        case 'SQL':
          text = '\x1b[32m';
          break;
        default:
          break;
      }
    }
    text += `[${type}]`;
    return text;
  }

  print(type, message) {
    let text = '';
    if (this.timestamps) {
      text = `\x1b[35m${new Date().toISOString()}\x1b[0m | `;
    }
    text += `${this.logTypeFormatter(type)} ${message}\x1b[0m`;
    console.log(text);
  }

  log(...params) {
    this.print('LOG', this.paramsFormatter(params));
  }

  error(...params) {
    this.print('ERROR', this.paramsFormatter(params));
  }

  warn(...params) {
    this.print('WARN', this.paramsFormatter(params));
  }

  info(...params) {
    this.print('INFO', this.paramsFormatter(params));
  }

  sqlLog(args) {
    if (args.length > 2) { // Benchmark ms is present
      this.print('SQL', this.paramsFormatter([args[0], `\x1b[0m- ${args[1]}ms`]));
    } else {
      this.print('SQL', this.paramsFormatter([args[0]]));
    }
  }
}

module.exports = Logger;
