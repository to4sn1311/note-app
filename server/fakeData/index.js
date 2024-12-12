export default {
  authors: [
    {
      id: "author-1",
      name: "John Doe",
    },
    {
      id: "author-2",
      name: "Jane Smith",
    },
  ],

  folders: [
    {
      id: "folder-1",
      name: "Important Documents",
      authorId: "author-1",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-01T00:00:00Z",
    },
    {
      id: "folder-2",
      name: "Project Files",
      authorId: "author-2",
      createdAt: "2023-02-15T00:00:00Z",
      updatedAt: "2023-02-15T00:00:00Z",
    },
    {
      id: "folder-3",
      name: "Personal Notes",
      authorId: "author-1",
      createdAt: "2023-03-20T00:00:00Z",
      updatedAt: "2023-03-20T00:00:00Z",
    },
  ],
};
