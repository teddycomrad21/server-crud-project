import Post from './Post.js';
import FileService from './FileService.js';

class PostService {
    async create(post, picture) {
            if (picture) {
                const fileName = FileService.saveFile(picture);
                const createdPost = await Post.create({ ...post, picture: fileName });

                return createdPost;
            }
            const createdPost = await Post.create(post);

            return createdPost;
        }

    async getAll() {
        const posts = await Post.find();
            
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id is required');
        }

        const post = await Post.findById(id);

        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('No post found to update');
        }

        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });

        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id is required');
        }

        const post = await Post.findByIdAndDelete(id)

        return post;
    }
}

export default new PostService();