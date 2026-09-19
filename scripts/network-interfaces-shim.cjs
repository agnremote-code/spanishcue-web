// Wrangler asks libuv for every host network interface even when a loopback IP
// is supplied. The managed CI sandbox blocks that syscall, so local integration
// tests provide the one interface they actually use.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const os = require("node:os");

os.networkInterfaces = () => ({
  lo: [
    {
      address: "127.0.0.1",
      netmask: "255.0.0.0",
      family: "IPv4",
      mac: "00:00:00:00:00:00",
      internal: true,
      cidr: "127.0.0.1/8",
    },
  ],
});
