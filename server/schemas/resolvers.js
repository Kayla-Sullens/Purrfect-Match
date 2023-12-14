const { User, Cat, Comment } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw AuthenticationError;
    },

    cat: async (_, { _id }) => {
      try {
        console.log("Fetching cat with ID:", _id);
        const cat = await Cat.findById(_id);
        return cat;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching cat");
      }
    },
    cats: async () => {
      try {
        const cats = await Cat.find();
        return cats;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching cats");
      }
    },
    comments: async (_, args) => {
      try {
        const comments = await Comment.find({ catId: args.catId });
        return comments;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching comments");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    //TODO: updateCat, deleteCat, createComment, deleteComment
    updateCat: async (parent, args, context) => {
      const cat = await Cat.findByIdAndUpdate(
        args.id,
        { catName: args.updateCatName },
        { new: true }
      );

      return cat;
    },
    deleteCat: async (parent, args, context) => {
      const cat = await Cat.findByIdAndDelete(args._id);

      return cat;
    },
    addComment: async (parent, args, context) => {
      console.log(args);
      console.log(context.user);
      const comment = await Comment.create(args);

      return comment; // Return the newly inserted comment
    },
    // ,
    // deleteCat: async (parent, args, context) => {
    //   const com = await Comment.findByIdAndDelete(args._id);

    //   return com;
    // }
  }
};

module.exports = resolvers;
