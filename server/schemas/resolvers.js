const {User } = require('../models')

const { Profile } = require('../models');

const resolvers = {
  Query: {
    async getSingleUser(parent, args, ) {
      return await User.findById(args.id)
    },
  },

  Mutation: {
    async createUser(parent, args, ) {
      return await User.create(args);
    },
    async login(parent, args, ) {
      return await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    },
    async saveBook(parent, args, ) {
      return await User.findByIdandUpdate(
        args.id,
        {$addToSet:{[args.bookId]:1}},
        {new: true},
        {runValidators: true}
          // { _id: user._id },
          // { $addToSet: { savedBooks: body } },
          // { new: true, runValidators: true }
        );
    },
    async deleteBook(parent, args, ) {
      return await User.findByIdandUpdate(
        args.id,
        {$pull:{[args.bookId]:1}},
        {new: true}
        // { _id: user._id },
        // { $pull: { savedBooks: { bookId: params.bookId } } },
        // { new: true }
      );
    }
  },
};

module.exports = resolvers;
