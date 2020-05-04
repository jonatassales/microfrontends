"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const data_1 = require("./data");
const utils_1 = require("./utils");
exports.default = new apollo_server_1.ApolloServer({
    typeDefs: data_1.schema,
    resolvers: {
        Post: {
            comments(source) {
                return data_1.commentsData.items.filter((item) => item.postId === source.id);
            }
        },
        Query: {
            posts: (_source, { search }) => {
                if (!search) {
                    return data_1.postsData;
                }
                const searchedPosts = data_1.postsData.items.filter((item) => utils_1.compare(item.title, search));
                return {
                    total: searchedPosts.length,
                    items: searchedPosts
                };
            },
            post: (_source, { id }) => data_1.postsData.items.find(item => item.id === id),
            comments: () => data_1.commentsData,
            comment: (_source, { id }) => data_1.commentsData.items.find((item) => item.id === id)
        }
    }
});
