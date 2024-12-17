class ProcessSemaphore {

  static create(...args) {
    return new this(...args);
  }

  constructor(pidFile = "pid.json") {
    this.pidFile = pidFile;
  }

  clear(notifyError = false) {
    try {
      const pid = JSON.parse(require("fs").readFileSync(this.pidFile).toString()).pid;
      process.kill(pid);
    } catch (error) {
      if(notifyError) {
        throw error;
      }
    }
  }

  renew() {
    this.clear(false);
    this.persist();
  }

  persist() {
    require("fs").writeFileSync(this.pidFile, JSON.stringify({ pid: process.pid }), "utf8");
  }

}

ProcessSemaphore.default = ProcessSemaphore;

module.exports = ProcessSemaphore;