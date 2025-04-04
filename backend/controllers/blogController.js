const Blog = require("../models/Blog");

// ✅ Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body; // 👈 Make sure to extract 'content'
    const image = req.file ? req.file.filename : null;

    // ✅ Validate all required fields
    if (!title || !description || !content || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBlog = new Blog({
      title,
      description,
      content,
      image,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("❌ Error creating blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};
