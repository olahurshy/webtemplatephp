module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "default",
      region: "",
      bucket: "vue-banga",
      createBucket: false,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: "/",
      acl: "public-read-write",
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: "3.0.0"
    }
  }
};
