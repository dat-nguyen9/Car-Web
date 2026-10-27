module.exports = {
  apps: [
    {
      name: "carweb",
      script: "node_modules/next/dist/bin/next",
      args: `start -p ${process.env.PORT || 80}`,
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 80,
      },
    },
  ],
};
