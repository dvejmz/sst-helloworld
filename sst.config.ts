/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-helloworld",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("SSTNextjsBucket", {
      public: true,
    });
    new sst.aws.Nextjs("SSTNextJs");
  },
});
