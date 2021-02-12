import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  // mongoose.model のリターンです。
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    // status 201:リクエストが成功してリソースの作成が完了したことを表します
    res.status(201).json(newPost);
  } catch (error) {
    //409:リクエストが現在のサーバーの状態と競合したこと
    res.status(409).json({ message: error.message });
  }
};
