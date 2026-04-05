// Initialize sample movies data in localStorage
const sampleMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    titleVi: "Dune: Hành Tinh Cát - Phần 2",
    genres: "Hành động, Viễn tưởng",
    duration: 166,
    releaseDate: "01/03/2024",
    status: 1,
    posterUrl: "https://example.com/images/dune-part-two-poster.jpg",
    description:
      "Tiếp nối phần trước, Paul Atreides hợp nhất với Fremen để trả thù gia tộc Harkonnen và đối mặt với số phận của vũ trụ.",
    ticketPrice: 95000,
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    titleVi: "Kung Fu Panda 4",
    genres: "Hoạt hình, Hài",
    duration: 94,
    releaseDate: "08/03/2024",
    status: 1,
    posterUrl: "https://example.com/images/kung-fu-panda-4-poster.jpg",
    description:
      "Po tiếp tục hành trình trở thành Chiến binh Rồng, đối mặt với kẻ thù mới và tìm người kế nhiệm.",
    ticketPrice: 80000,
  },
  {
    id: 3,
    title: "Godzilla x Kong: The New Empire",
    titleVi: "Godzilla x Kong: Đế Chế Mới",
    genres: "Hành động, Viễn tưởng",
    duration: 115,
    releaseDate: "29/03/2024",
    status: 2,
    posterUrl: "https://example.com/images/godzilla-x-kong-poster.jpg",
    description:
      "Godzilla và Kong hợp sức chống lại mối đe dọa mới từ lòng đất.",
    ticketPrice: 80000,
  },
  {
    id: 4,
    title: "Mai",
    titleVi: "Mai",
    genres: "Tâm lý, Tình cảm",
    duration: 131,
    releaseDate: "10/02/2024",
    status: 0,
    posterUrl: "https://example.com/images/mai-poster.jpg",
    description:
      "Câu chuyện về một người phụ nữ mạnh mẽ đối mặt với những biến cố trong cuộc sống.",
    ticketPrice: 80000,
  },
  {
    id: 5,
    title: "Exhuma",
    titleVi: "Exhuma: Quật Mộ Trùng Ma",
    genres: "Kinh dị, Bí ẩn",
    duration: 134,
    releaseDate: "15/03/2024",
    status: 1,
    posterUrl: "https://example.com/images/exhuma-poster.jpg",
    description:
      "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
    ticketPrice: 80000,
  },
];

// Initialize sample tickets data in localStorage
const sampleTickets = [
  {
    id: 1,
    ticketCode: "RKABC123456",
    movieId: 1,
    movieTitle: "Avengers: Endgame",
    userId: 2,
    customerName: "Nguyễn Văn A",
    showDate: "2026-04-10",
    showTime: "19:00",
    seats: "A1, A2",
    price: 90000,
    quantity: 2,
    totalPrice: 180000,
    status: "confirmed",
    bookingDate: "2026-04-01T10:00:00.000Z",
  },
  {
    id: 2,
    ticketCode: "RKDEF789012",
    movieId: 2,
    movieTitle: "Spider-Man: No Way Home",
    userId: 2,
    customerName: "Nguyễn Văn A",
    showDate: "2026-04-12",
    showTime: "21:00",
    seats: "B5",
    price: 90000,
    quantity: 1,
    totalPrice: 90000,
    status: "pending",
    bookingDate: "2026-04-02T15:30:00.000Z",
  },
  {
    id: 3,
    ticketCode: "RKGHI345678",
    movieId: 3,
    movieTitle: "The Batman",
    userId: 2,
    customerName: "Nguyễn Văn A",
    showDate: "2026-03-28",
    showTime: "17:00",
    seats: "C10, C11, C12",
    price: 90000,
    quantity: 3,
    totalPrice: 270000,
    status: "completed",
    bookingDate: "2026-03-20T09:00:00.000Z",
  },
];

// Initialize users for testing
const sampleUsers = [
  {
    id: 1,
    fullName: "Admin Chính",
    email: "LQTuan@rikkei.edu.vn",
    password: "Admin123456",
    role: "admin",
    createdAt: "2026-03-03T12:26:21.617Z",
    isActive: true,
  },
  {
    id: 2,
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    password: "Matkhau123",
    role: "user",
    createdAt: "2026-03-01T12:26:21.617Z",
    isActive: true,
  },
  {
    id: 3,
    fullName: "Trần Thị B",
    email: "tranthib@example.com",
    password: "12345678",
    role: "user",
    createdAt: "2026-03-03T12:26:21.617Z",
    isActive: false,
  },
];

// Initialize localStorage if not already set
if (!localStorage.getItem("movies")) {
  localStorage.setItem("movies", JSON.stringify(sampleMovies));
}

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(sampleUsers));
}

if (!localStorage.getItem("tickets")) {
  localStorage.setItem("tickets", JSON.stringify(sampleTickets));
}
