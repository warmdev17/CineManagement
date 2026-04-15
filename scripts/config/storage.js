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
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
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
    posterUrl:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
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
    posterUrl:
      "https://image.tmdb.org/t/p/w500/1DTP1Ph4uzNO6ofRUm7eAimWoKD.jpg",
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
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
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
    posterUrl: "https://placehold.co/500x750/1e1e2e/cdd6f4?text=Exhuma",
    description:
      "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
    ticketPrice: 80000,
  },
  {
    id: 6,
    title: "Inside Out 2",
    titleVi: "Những Mảnh Ghép Cảm Xúc 2",
    genres: "Hoạt hình, Tâm lý",
    duration: 100,
    releaseDate: "14/06/2024",
    status: 1,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    description:
      "Riley bước vào tuổi dậy thì, kéo theo sự xuất hiện của những cảm xúc hoàn toàn mới mẻ như Lo âu, Ghen Tị.",
    ticketPrice: 90000,
  },
  {
    id: 7,
    title: "Deadpool & Wolverine",
    titleVi: "Deadpool & Wolverine",
    genres: "Hành động, Hài",
    duration: 127,
    releaseDate: "26/07/2024",
    status: 2,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    description:
      "Deadpool buộc phải hợp tác với Wolverine trong một nhiệm vụ thay đổi lịch sử của Vũ trụ Điện ảnh Marvel.",
    ticketPrice: 95000,
  },
  {
    id: 8,
    title: "Lat Mat 7: One Wish",
    titleVi: "Lật Mặt 7: Một Điều Ước",
    genres: "Gia đình, Tâm lý",
    duration: 138,
    releaseDate: "26/04/2024",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/cba6f7?text=Lat+Mat+7",
    description:
      "Câu chuyện cảm động về tình mẫu tử và nỗi niềm của người mẹ già khi các con trưởng thành và dần xa cách.",
    ticketPrice: 85000,
  },
  {
    id: 9,
    title: "Oppenheimer",
    titleVi: "Oppenheimer",
    genres: "Tiểu sử, Lịch sử",
    duration: 180,
    releaseDate: "11/08/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description:
      "Cuộc đời và di sản của J. Robert Oppenheimer, cha đẻ của bom nguyên tử trong Thế chiến II.",
    ticketPrice: 90000,
  },
  {
    id: 10,
    title: "Barbie",
    titleVi: "Barbie",
    genres: "Hài, Phiêu lưu",
    duration: 114,
    releaseDate: "21/07/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    description:
      "Barbie và Ken rời khỏi Barbieland đầy màu sắc để bước vào thế giới thực với nhiều bài học cuộc sống.",
    ticketPrice: 85000,
  },
  {
    id: 11,
    title: "Avatar: The Way of Water",
    titleVi: "Avatar: Dòng Chảy Của Nước",
    genres: "Hành động, Viễn tưởng",
    duration: 192,
    releaseDate: "16/12/2022",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/t6HIqrHezINNdIEwj0IjJ6TKRYv.jpg",
    description:
      "Jake Sully cùng gia đình bảo vệ hành tinh Pandora trước sự trở lại của con người.",
    ticketPrice: 100000,
  },
  {
    id: 12,
    title: "Spider-Man: Across the Spider-Verse",
    titleVi: "Người Nhện: Du Hành Vũ Trụ Nhện",
    genres: "Hoạt hình, Hành động",
    duration: 140,
    releaseDate: "02/06/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    description:
      "Miles Morales dấn thân vào đa vũ trụ và đối mặt với những biến cố lớn cùng các Người Nhện khác.",
    ticketPrice: 90000,
  },
  {
    id: 13,
    title: "The Batman",
    titleVi: "Batman",
    genres: "Hành động, Tội phạm",
    duration: 176,
    releaseDate: "04/03/2022",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman truy lùng một kẻ giết người hàng loạt mang tên Riddler tại thành phố Gotham.",
    ticketPrice: 85000,
  },
  {
    id: 14,
    title: "Dao, Pho va Piano",
    titleVi: "Đào, Phở và Piano",
    genres: "Lịch sử, Chiến tranh",
    duration: 100,
    releaseDate: "10/02/2024",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/f38ba8?text=Dao+Pho+Piano",
    description:
      "Câu chuyện tình yêu lãng mạn và bi tráng của người Hà Nội trong cuộc chiến 60 ngày đêm.",
    ticketPrice: 50000,
  },
  {
    id: 15,
    title: "Mat Biec",
    titleVi: "Mắt Biếc",
    genres: "Tình cảm, Tâm lý",
    duration: 117,
    releaseDate: "20/12/2019",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/fab387?text=Mat+Biec",
    description:
      "Mối tình đơn phương khắc cốt ghi tâm của Ngạn dành cho Hà Lan từ thuở ấu thơ.",
    ticketPrice: 75000,
  },
  {
    id: 16,
    title: "John Wick: Chapter 4",
    titleVi: "Sát Thủ John Wick: Phần 4",
    genres: "Hành động, Giật gân",
    duration: 169,
    releaseDate: "24/03/2023",
    status: 0,
    posterUrl: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    description:
      "John Wick tìm cách đánh bại High Table để giành lại tự do cho bản thân.",
    ticketPrice: 90000,
  },
  {
    id: 17,
    title: "The Super Mario Bros. Movie",
    titleVi: "Phim Anh Em Super Mario",
    genres: "Hoạt hình, Phiêu lưu",
    duration: 92,
    releaseDate: "05/04/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    description:
      "Mario và Luigi dấn thân vào một cuộc phiêu lưu đến Vương quốc Nấm để giải cứu Công chúa Peach.",
    ticketPrice: 85000,
  },
  {
    id: 18,
    title: "Transformers: Rise of the Beasts",
    titleVi: "Transformers: Quái Thú Trỗi Dậy",
    genres: "Hành động, Viễn tưởng",
    duration: 127,
    releaseDate: "09/06/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    description:
      "Autobots hợp tác với Maximals để bảo vệ Trái Đất khỏi thảm họa diệt vong.",
    ticketPrice: 90000,
  },
  {
    id: 19,
    title: "Fast X",
    titleVi: "Fast & Furious 10",
    genres: "Hành động, Tội phạm",
    duration: 141,
    releaseDate: "19/05/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclAyc.jpg",
    description:
      "Dom Toretto đối mặt với kẻ thù nguy hiểm nhất từ trước đến nay, khao khát trả thù cho quá khứ.",
    ticketPrice: 95000,
  },
  {
    id: 20,
    title: "Mission: Impossible - Dead Reckoning Part One",
    titleVi: "Nhiệm Vụ Bất Khả Thi: Nghiệp Báo Phần 1",
    genres: "Hành động, Giật gân",
    duration: 163,
    releaseDate: "12/07/2023",
    status: 0,
    posterUrl: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    description:
      "Ethan Hunt và đội IMF truy lùng một vũ khí đáng sợ đe dọa toàn nhân loại.",
    ticketPrice: 95000,
  },
  {
    id: 21,
    title: "Guardians of the Galaxy Vol. 3",
    titleVi: "Vệ Binh Dải Ngân Hà 3",
    genres: "Hành động, Viễn tưởng",
    duration: 150,
    releaseDate: "05/05/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    description:
      "Đội Vệ binh phải đối mặt với quá khứ của Rocket để cứu mạng anh và bảo vệ ngân hà.",
    ticketPrice: 90000,
  },
  {
    id: 22,
    title: "The Flash",
    titleVi: "Người Chớp",
    genres: "Hành động, Viễn tưởng",
    duration: 144,
    releaseDate: "16/06/2023",
    status: 0,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    description:
      "Barry Allen dùng siêu tốc độ để quay về quá khứ nhưng vô tình làm thay đổi dòng thời gian.",
    ticketPrice: 85000,
  },
  {
    id: 23,
    title: "Elemental",
    titleVi: "Xứ Sở Các Nguyên Tố",
    genres: "Hoạt hình, Lãng mạn",
    duration: 101,
    releaseDate: "16/06/2023",
    status: 0,
    posterUrl: "https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJisvBzhSQTrA.jpg",
    description:
      "Câu chuyện tình yêu giữa Ember rực lửa và Wade êm điềm trong thành phố của các nguyên tố.",
    ticketPrice: 80000,
  },
  {
    id: 24,
    title: "Nha Ba Nu",
    titleVi: "Nhà Bà Nữ",
    genres: "Tâm lý, Hài",
    duration: 102,
    releaseDate: "22/01/2023",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/a6e3a1?text=Nha+Ba+Nu",
    description:
      "Những xung đột thế hệ và tình yêu trong gia đình của một bà chủ quán bánh canh cua.",
    ticketPrice: 85000,
  },
  {
    id: 25,
    title: "The Creator",
    titleVi: "Kẻ Kiến Tạo",
    genres: "Viễn tưởng, Hành động",
    duration: 133,
    releaseDate: "29/09/2023",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/89b4fa?text=The+Creator",
    description:
      "Trong cuộc chiến giữa loài người và AI, một người lính phát hiện siêu vũ khí lại là một đứa trẻ.",
    ticketPrice: 85000,
  },
  {
    id: 26,
    title: "Decision to Leave",
    titleVi: "Quyết Tâm Chia Tay",
    genres: "Tình cảm, Bí ẩn",
    duration: 138,
    releaseDate: "29/06/2022",
    status: 0,
    posterUrl:
      "https://placehold.co/500x750/1e1e2e/f9e2af?text=Decision+to+Leave",
    description:
      "Viên thanh tra nảy sinh tình cảm với nghi phạm chính trong một vụ án mạng bí ẩn trên núi.",
    ticketPrice: 80000,
  },
  {
    id: 27,
    title: "Quy Cau",
    titleVi: "Quỷ Cẩu",
    genres: "Kinh dị, Tâm lý",
    duration: 105,
    releaseDate: "22/12/2023",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/eba0ac?text=Quy+Cau",
    description:
      "Câu chuyện tâm linh kinh dị xoay quanh nghiệp báo và những bí ẩn của gia đình làm nghề mổ chó.",
    ticketPrice: 75000,
  },
  {
    id: 28,
    title: "Suzume",
    titleVi: "Khóa Chặt Cửa Nào Suzume",
    genres: "Hoạt hình, Kỳ ảo",
    duration: 122,
    releaseDate: "10/03/2023",
    status: 0,
    posterUrl: "https://placehold.co/500x750/1e1e2e/94e2d5?text=Suzume",
    description:
      "Suzume đồng hành cùng một chàng trai bí ẩn để đóng những cánh cửa tai ương trên khắp nước Nhật.",
    ticketPrice: 85000,
  },
];

// Initialize sample tickets data in localStorage
const sampleTickets = [
  {
    id: 1001,
    ticketCode: "VE-1001",
    customerName: "Nguyễn Văn A",
    customerPhone: "0987654321",
    movieId: 1,
    movieTitle: "Dune: Hành Tinh Cát - Phần 2",
    showDate: "2026-03-15",
    showTime: "10:00",
    seats: ["F12", "F13"],
    seatCount: 2,
    pricePerSeat: 90000,
    totalAmount: 180000,
    paymentMethod: 0,
    paymentStatus: true,
    createdAt: "2026-03-10T14:30:00Z",
    note: "Khách yêu cầu ghế gần lối đi",
    statusDisplay: "Đã Thanh Toán",
  },
  {
    id: 1002,
    ticketCode: "VE-1002",
    customerName: "Trần Thị B",
    customerPhone: "0912654321",
    movieId: 4,
    movieTitle: "Mai",
    showDate: "2026-03-16",
    showTime: "13:30",
    seats: ["G5"],
    seatCount: 1,
    pricePerSeat: 90000,
    totalAmount: 90000,
    paymentMethod: 1,
    paymentStatus: false,
    createdAt: "2026-03-11T09:15:00Z",
    note: "",
    statusDisplay: "Chờ xử lý",
  },
  {
    id: 1003,
    ticketCode: "VE-1003",
    customerName: "Lê Văn C",
    customerPhone: "0905654321",
    movieId: 2,
    movieTitle: "Kung Fu Panda 4",
    showDate: "2026-03-17",
    showTime: "19:00",
    seats: ["H10", "H11", "H12"],
    seatCount: 3,
    pricePerSeat: 90000,
    totalAmount: 270000,
    paymentMethod: 2,
    paymentStatus: true,
    createdAt: "2026-03-12T16:45:00Z",
    note: "Combo bắp nước tặng kèm",
    statusDisplay: "Đã Thanh Toán",
  },
  {
    id: 1004,
    ticketCode: "VE-1004",
    customerName: "Phạm Minh D",
    customerPhone: "0853654321",
    movieId: 5,
    movieTitle: "Exhuma: Quật Mộ Trùng Ma",
    showDate: "2026-03-14",
    showTime: "21:45",
    seats: ["E8"],
    seatCount: 1,
    pricePerSeat: 90000,
    totalAmount: 90000,
    paymentMethod: 0,
    paymentStatus: false,
    createdAt: "2026-03-13T11:20:00Z",
    note: "Khách hủy do bận đột xuất",
    statusDisplay: "Đã hủy",
  },
  {
    id: 1005,
    ticketCode: "VE-1005",
    customerName: "Hoàng Yến E",
    customerPhone: "0977654321",
    movieId: 3,
    movieTitle: "Godzilla x Kong: Đế Chế Mới",
    showDate: "2026-03-18",
    showTime: "08:15",
    seats: ["D4", "D5"],
    seatCount: 2,
    pricePerSeat: 90000,
    totalAmount: 180000,
    paymentMethod: 0,
    paymentStatus: false,
    createdAt: "2026-03-02T08:50:00Z",
    note: "Chờ xác nhận thanh toán chuyển khoản",
    statusDisplay: "Chờ xử lý",
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
