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
    cats: async (parent, args, context) => {
      const cats = await Cat.find({});

      return cats;
    },
    cat: async (parent, args, context) => {
      const cat = await Cat.findOne({});
      
      return cat;
    
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
  },
};

module.exports = resolvers;
