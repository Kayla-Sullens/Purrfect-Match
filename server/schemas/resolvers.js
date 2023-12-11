const { User, Cat, Comment } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const kittyDitty = require("../config/catData.json");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw AuthenticationError;
    },
    cats: async () => {
      const cats = await Cat.find({});

      return cats;
    },
    cat: async (_, args) => {
      const cat = await Cat.findById(args._id);
      
      return cat;
    }
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
          const cat = await Cat.findByIdAndUpdate(args.id, { catName: args.updateCatName }, { new: true });
          console.log(cat);
          return cat;
    },

  },
};

module.exports = resolvers;
