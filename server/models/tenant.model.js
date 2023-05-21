module.exports = (mongoose) => {
  const Tenant = mongoose.model(
    "tenant",
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        telephone: Number,
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};
