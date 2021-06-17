const { model, Schema } = require('mongoose');

const bucketListItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
});

const BucketListItem = model('BucketListItem', bucketListItemSchema);

module.exports = {
  BucketListItem,
};
