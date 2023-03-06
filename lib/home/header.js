export const header = {
  contact: {
    name: "contact",
    items: [
      {
        content: "Liên hệ với chúng tôi",
        icon: "",
        modal: [],
      },
      {
        content: "Hổ trợ",
        icon: `<svg fill="#ddd" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 6.4 12 12 12-12z"/></svg>`,
        modal: [
          {
            content: "Trung tâm hổ trợ",
          },
          {
            content: "Trung tâm kiến thức",
          },
          {
            content: "Tổng quan về hổ trợ AWS",
          },
          {
            content: "AWS re:Post",
          },
        ],
      },
      {
        content: "Tiếng Việt",
        icon: `<svg fill="#ddd" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 6.4 12 12 12-12z"/></svg>`,
        modal: [
          {
            content: "عربي",
          },
          {
            content: "Deutsch",
          },
          {
            content: "English",
          },
          {
            content: "Español",
          },
          {
            content: "Français",
          },
          {
            content: "Italiano",
          },
          {
            content: "Português",
          },
          {
            content: "Türkçe",
          },
          {
            content: "Ρусский",
          },
          {
            content: "ไทย",
          },
          {
            content: "日本語",
          },
          {
            content: "한국어",
          },
          {
            content: "中文 (简体)",
          },
          {
            content: "中文 (繁體)",
          },
        ],
      },
      {
        content: "Tài khoản của tôi",
        icon: `<svg fill="#ddd" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 6.4 12 12 12-12z"/></svg>`,
        class: "",
        modal: [
          {
            content: "Bảng điều khiển quản lý AWS",
          },
          {
            content: "Thiết lập tài khoản",
          },
          {
            content: "Quản lý hóa đơn và chi phí",
          },
          {
            content: "Thông tin xác thực bảo mật",
          },
          {
            content: "AWS Personal Health Dashboard",
          },
        ],
      },
    ],
  },
  navigation: {
    name: "navTop",
    items: [
      {
        content: "Sản phẩm",
        style: "menu",
        idMenu: "product",
        navMenu: [
          {
            menu: "Dịch vụ nổi bật",
            des: [
              {
                title: "Amazon EC2",
                des: "Máy chủ ảo trên đám mây",
              },
              {
                title: "Dịch vụ lưu trữ đơn giản của Amazon (S3)",
                des: "Kho lưu trữ quy mô linh hoạt trên đám mây",
              },
              {
                title: "Amazon Aurora",
                des: "Cơ sở dữ liệu quan hệ được quản lý có hiệu năng cao với khả năng tương thích hoàn toàn với MySQL và PostgreSQL",
              },
              {
                title: "Amazon DynamoDB",
                des: "Cơ sở dữ liệu NoSQL được quản lý",
              },
              {
                title: "Amazon RDS",
                des: "Dịch vụ cơ sở dữ liệu quan hệ được quản lý cho MySQL, PostgreSQL, Oracle, SQL Server và MariaDB",
              },
              {
                title: "AWS Lambda",
                des: "Chạy mã mà không cần quan tâm tới máy chủ",
              },
              {
                title: "Amazon VPC",
                des: "Tài nguyên tách biệt trên đám mây",
              },
              {
                title: "Amazon Lightsail",
                des: "Chạy và quản lý máy chủ riêng ảo",
              },
              {
                title: "Amazon SageMaker",
                des: "Xây dựng, đào tạo và triển khai các mô hình máy học ở quy mô lớn",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc thông tin mới nhất trên blog AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Phân tích",
            des: [
              {
                title: "Amazon Athena",
                des: "Truy vấn dữ liệu trong S3 bằng SQL",
              },
              {
                title: "Amazon CloudSearch",
                des: "Dịch vụ tìm kiếm được quản lý",
              },
              {
                title: "Amazon DataZone (Xem trước)",
                des: "Vượt qua rào cản giữa các bộ phận trong tổ chức để khai thác dữ liệu với khả năng quản trị tích hợp",
              },
              {
                title: "Dịch vụ OpenSearch của Amazon",
                des: "Tìm kiếm, trực quan hóa và phân tích lên đến hàng petabyte văn bản cũng như dữ liệu không có cấu trúc",
              },
              {
                title: "Amazon EMR",
                des: "Dễ dàng chạy các khung dữ liệu lớn",
              },
              {
                title: "Amazon FinSpace",
                des: "Phân tích cho ngành dịch vụ tài chính",
              },
              {
                title: "Amazon Kinesis",
                des: "Phân tích luồng video và dữ liệu thời gian thực",
              },
              {
                title:
                  "Dịch vụ truyền được quản lý của Amazon dành cho Apache Kafka",
                des: "Dịch vụ Apache Kafka được quản lý toàn phần",
              },
              {
                title: "Amazon Redshift",
                des: "Kho dữ liệu nhanh, đơn giản và tiết kiệm chi phí",
              },
              {
                title: "Amazon QuickSight",
                des: "Dịch vụ phân tích kinh doanh tốc độ cao",
              },
              {
                title: "AWS Clean Rooms (Xem trước)",
                des: "So khớp, phân tích và cộng tác trên các tập dữ liệu mà không cần chia sẻ hay tiết lộ dữ liệu cơ sở",
              },
              {
                title: "Trao đổi dữ liệu trên AWS",
                des: "Tìm, đăng ký và sử dụng dữ liệu bên thứ ba trên đám mây",
              },
              {
                title: "Quy trình dữ liệu của AWS",
                des: "Dịch vụ điều phối dành cho luồng công việc dựa trên dữ liệu mang tính định kỳ",
              },
              {
                title: "AWS Glue",
                des: "Tích hợp dữ liệu đơn giản, có thể mở rộng và không cần máy chủ",
              },
              {
                title: "AWS Lake Formation",
                des: "Xây dựng, quản lý và bảo mật hồ dữ liệu",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc bài đăng blog mới nhất về Dữ liệu lớn",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Dữ liệu lớn và Phân tích trên AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Tích hợp ứng dụng",
            des: [
              {
                title: "AWS Step Functions",
                des: "Điều phối dành cho ứng dụng được phân phối",
              },
              {
                title: "Amazon AppFlow",
                des: "Khả năng tích hợp không cần mã cho ứng dụng SaaS và các dịch vụ AWS",
              },
              {
                title: "Amazon EventBridge",
                des: "Bus sự kiện phi máy chủ dành cho ứng dụng SaaS và các dịch vụ AWS",
              },
              {
                title:
                  "Quy trình làm việc được quản lý của Amazon dành cho Apache Airflow",
                des: "Điều phối quy trình công việc với độ sẵn có cao, bảo mật và được quản lý mọi mặt",
              },
              {
                title: "Amazon MQ",
                des: "Dịch vụ trình truyền tải thông điệp được quản lý",
              },
              {
                title: "Dịch vụ thông báo đơn giản của Amazon (SNS)",
                des: "Thông báo đẩy bằng cơ chế Pub/sub, SMS, email và di động",
              },
              {
                title: "Dịch vụ hàng đợi đơn giản (SQS) của Amazon",
                des: "Hàng đợi tin nhắn được quản lý",
              },
              {
                title: "AWS AppSync",
                des: "API GraphQL được quản lý toàn phần với quy mô linh hoạt",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về Tích hợp ứng dụng cho dịch vụ Điện toán của AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Tích hợp ứng dụng trên AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Blockchain",
            des: [
              {
                title: "Blockchain được quản lý của Amazon",
                des: "Tạo và quản lý mạng lưới blockchain linh hoạt về quy mô",
              },
              {
                title: "Cơ sở dữ liệu sổ cái lượng tử của Amazon (QLDB)",
                des: "Cơ sở dữ liệu sổ cái được quản lý toàn phần",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Xem thông báo dành cho Blockchain trên AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Đọc hướng dẫn kỹ thuật dành cho Blockchain được quản lý của Amazon",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Ứng dụng dành cho doanh nghiệp",
            des: [
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Pinpoint",
                des: "Dịch vụ truyền thông tiếp thị đa kênh",
              },
              {
                title: "Chuỗi cung ứng AWS (Xem trước)",
                des: "Giảm thiểu rủi ro và tiết kiệm chi phí nhờ ứng dụng chuỗi cung ứng vận dụng máy học (ML)",
              },
              {
                title: "Amazon Honeycode (Beta)",
                des: "Xây dựng ứng dụng di động và web mà không cần lập trình",
              },
              {
                title: "Amazon Chime",
                des: "Hội họp, gọi video và trò chuyện không gián đoạn",
              },
              {
                title: "AWS Wickr",
                des: "Giao tiếp được mã hóa toàn diện",
              },
              {
                title: "Amazon WorkDocs",
                des: "Bảo mật việc lưu trữ và chia sẻ tài liệu của doanh nghiệp",
              },
              {
                title: "Amazon WorkMail",
                des: "Bảo mật email và lịch",
              },
              {
                title: "Alexa dành cho doanh nghiệp",
                des: "Trang bị Alexa để tiếp thêm sức mạnh cho tổ chức của bạn",
              },
              {
                title: "SDK Amazon Chime",
                des: "Nhắn tin, gọi âm thanh, gọi video và chia sẻ màn hình trong thời gian thực",
              },
              {
                title: "Dịch vụ email đơn giản của Amazon (SES)",
                des: "Email đến và đi quy mô lớn",
              },
              {
                title: "API Amazon Pinpoint",
                des: "Tin nhắn SMS và thông báo đẩy linh hoạt trên di động",
              },
              {
                title: "Bộ kết nối giọng nói Amazon Chime",
                des: "Dịch vụ kênh trung kế thoại chạy SIP và các tính năng nâng cao qua điện thoại",
              },
              {
                title: "SDK Amazon WorkDocs",
                des: "Quản lý và cộng tác trên tệp một cách bảo mật",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về Năng suất doanh nghiệp",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Năng suất doanh nghiệp",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Quản lý tài chính cho nền tảng đám mây",
            des: [
              {
                title: "Trình khám phá chi phí AWS",
                des: "Phân tích chi phí và mức sử dụng AWS của bạn",
              },
              {
                title: "Trình hỗ trợ thanh toán AWS",
                des: "Đơn giản hóa quy trình thanh toán và báo cáo nhờ tùy chọn định giá tùy chỉnh và khả năng nắm rõ chi phí",
              },
              {
                title: "Ngân sách AWS",
                des: "Thiết lập chi phí tùy chỉnh và ngân sách sử dụng",
              },
              {
                title: "Báo cáo chi phí và mức sử dụng AWS",
                des: "Tiếp cận thông tin toàn diện về mặt chi phí và mức sử dụng",
              },
              {
                title: "Báo cáo phiên bản dự trữ",
                des: "Phân tích chuyên sâu phiên bản dự trữ (RI)",
              },
              {
                title: "Gói tiết kiệm",
                des: "Tiết kiệm đến 72% cho mức sử dụng điện toán với mức giá linh hoạt",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Xem thông báo dành cho dịch vụ Quản lý chi phí AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Tìm phần mềm AP và thanh toán trên AWS Marketplace",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Điện toán",
            des: [
              {
                title: "Amazon EC2",
                des: "Máy chủ ảo trên đám mây",
              },
              {
                title: "Tự động điều chỉnh quy mô Amazon EC2",
                des: "Thay đổi quy mô năng lực điện toán nhằm đáp ứng nhu cầu",
              },
              {
                title: "Amazon Lightsail",
                des: "Chạy và quản lý máy chủ riêng ảo",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Batch",
                des: "Chạy tác vụ theo lô ở mọi quy mô",
              },
              {
                title: "AWS Elastic Beanstalk",
                des: "Chạy và quản lý ứng dụng web",
              },
              {
                title: "AWS Lambda",
                des: "Chạy mã mà không cần quan tâm tới máy chủ",
              },
              {
                title: "AWS Outposts",
                des: "Chạy cơ sở hạ tầng AWS tại chỗ",
              },
              {
                title: "Kho ứng dụng phi máy chủ AWS",
                des: "Khám phá, triển khai và phát hành các ứng dụng phi máy chủ",
              },
              {
                title: "AWS SimSpace Weaver",
                des: "Xây dựng các trường hợp mô phỏng không gian linh động, quy mô lớn trên cơ sở hạ tầng được quản lý của AWS",
              },
              {
                title: "Hệ thống thiết bị AWS Snow",
                des: "Các thiết bị vật lý để tổng hợp và xử lý dữ liệu ở các vị trí biên, sau đó chuyển sang AWS",
              },
              {
                title: "AWS Wavelength",
                des: "Cung cấp các ứng dụng có độ trễ cực thấp cho các thiết bị 5G",
              },
              {
                title: "VMware Cloud trên AWS",
                des: "Xây dựng kiến trúc đám mây kết hợp mà không cần phần cứng tùy chỉnh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về dịch vụ Điện toán của AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Truy cập Trung tâm nhà phát triển AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Trung tâm liên hệ",
            des: [
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Tìm hiểu về Phân tích khách hàng",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Gắn kết với khách hàng trên AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Bộ chứa",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },

              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc bài đăng mới nhất trên blog AWS về Bộ chứa",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho Container trên AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Cơ sở dữ liệu",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },

              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về dịch vụ Cơ sở dữ liệu của AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo gần đây từ AWS về Cơ sở dữ liệu",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Công cụ dành cho nhà phát triển",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },

              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về DevOps",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Truy cập Trung tâm nhà phát triển AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Điện toán dành cho người dùng cuối",
            des: [
              {
                title: "Amazon WorkSpaces",
                des: "Máy tính ảo trên đám mây",
              },
              {
                title: "Amazon AppStream 2.0",
                des: "Phát trực tuyến ứng dụng trên máy tính để bàn sang một trình duyệt một cách an toàn",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc thông tin mới nhất về Điện toán dành cho người dùng cuối",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem các thông báo từ AWS về Điện toán dành cho người dùng cuối",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Front-end trên web và thiết bị di động",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Tìm hiểu thêm về chuỗi công cụ AWS Amplify CLI",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Đọc thông tin mới nhất về Di động",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Trò chơi",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
            ],
            info: [
              {
                title: "Hướng dẫn mới",
                des: "Xây dựng hệ thống kho đồ cho trò chơi với Amazon Aurora phi máy chủ",
              },
              {
                title: "Thành công của khách hàng",
                des: "Dead by Daylight đã bền bỉ với thời gian ra sao nhờ có AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Internet vạn vật",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về IoT",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Tìm Hướng dẫn 10 phút về Internet vạn vật",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Máy học",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về Máy học",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Máy học trên AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Quản lý và Quản trị",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Xem thông báo dành cho Quản lý và Quản trị trên AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Đọc blog mới nhất về Công cụ quản lý",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Dịch vụ phương tiện truyền thông",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc các bài đăng mới nhất từ blog Phương tiện của AWS",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Dịch vụ phương tiện truyền thông AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Kết nối mạng và phân phối nội dung",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Đọc blog mới nhất về Kết nối mạng và phân phối nội dung",
              },
              {
                title: "Thông tin mới về AWS",
                des: "Xem thông báo dành cho dịch vụ Kết nối mạng và phân phối nội dung",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Công nghệ lượng tử",
            des: [
              {
                title: "Amazon Braket",
                des: "Khám phá và thí nghiệm với tính toán lượng tử",
              },
              {
                title: "Phòng thực hành giải pháp lượng tử Amazon",
                des: "Cộng tác với chuyên gia về điện toán lượng tử",
              },
            ],
            info: [
              {
                title: "Blog của Jeff Barr",
                des: "Đọc quan điểm của Jeff về công nghệ lượng tử",
              },
              {
                title: "Câu hỏi thường gặp",
                des: "Tìm hiểu thêm về Amazon Braket và công nghệ lượng tử",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Khoa học robot",
            des: [
              {
                title: "AWS IoT RoboRunner",
                des: "Xây dựng ứng dụng giúp các nhóm robot làm việc cùng nhau một cách liền mạch",
              },
              {
                title: "AWS RoboMaker",
                des: "Phát triển, kiểm thử và triển khai ứng dụng robot",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Triển khai và triển khai từng bước ứng dụng robot",
              },
              {
                title: "Trung tâm tài nguyên",
                des: "Tìm tài nguyên để bắt đầu với AWS RoboMaker",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Vệ tinh",
            des: [
              {
                title: "Trạm mặt đất của AWS",
                des: "Dịch vụ trạm mặt đất được quản lý toàn phần",
              },
            ],
            info: [
              {
                title: "Blog",
                des: "Tìm hiểu về tiếp nhận và xử lý dữ liệu từ các vệ tinh",
              },
              {
                title: "Câu hỏi thường gặp",
                des: "Tìm câu trả lời cho các câu hỏi thường gặp về Trạm mặt đất của AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Bảo mật, Đinh danh và tuân thủ",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Tìm hiểu",
                des: "Tìm hiểu thêm về các ưu đãi của dịch vụ AWS Compliance",
              },
              {
                title: "Trung tâm tài nguyên",
                des: "Tìm tài nguyên và bài viết về chủ đề Bảo mật trên nền tảng đám mây",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Phi máy chủ",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Thông tin mới trên AWS",
                des: "Xem các thông báo mới nhất của AWS",
              },
              {
                title: "Blog AWS",
                des: "Đọc những thông tin mới nhất về AWS trên blog",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
          {
            menu: "Lưu trữ",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Thông tin mới trên AWS",
                des: "Xem thông báo gần đây về Bộ lưu trữ AWS",
              },
              {
                title: "Blog về Bộ lưu trữ AWS",
                des: "Đọc blog mới nhất về Bộ lưu trữ AWS",
              },
              {
                title: "AWS IQ",
                des: "Hoàn thành dự án nhanh hơn với sự giúp đỡ từ các chuyên gia bên thứ ba được chứng nhận AWS",
              },
              {
                title: "Dịch vụ được AWS quản lý",
                des: "Vận hành cơ sở hạ tầng AWS cho bạn",
              },
              {
                title: "AWS Professional Services",
                des: "Thúc đẩy kết quả kinh doanh với AWS",
              },
              {
                title: "AWS Training and Certification",
                des: "Xây dựng và chứng thực kỹ năng cũng như chuyên môn kỹ thuật của bạn",
              },
            ],
          },
        ],
      },
      {
        content: "Giải pháp",
        style: "menu",
        idMenu: "solution",
        navMenu: [
          {
            menu: "Theo trường hợp sử dụng",
            class:"solutionMenu",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "Thư viện giải pháp AWS",
                des: "Thư viện giải pháp AWS chứa các giải pháp được AWS và Đối tác AWS phát triển dành cho hàng loạt các trường hợp sử dụng theo từng công nghệ và từng ngành nghề",
              },
              {
                title: "Làm việc từ xa",
                des: "Tìm kiếm các giải pháp của AWS dành cho người đi học và đi làm, cũng như nhân viên tổng đài làm việc từ xa",
              },
              {
                title: "Ứng phó với COVID-19",
                des: "Tìm thông tin mới nhất về cách AWS hỗ trợ khách hàng, đối tác và cộng đồng của chúng tôi trong thời gian này",
              },
              {
                title: "AWS Well-Architected",
                des: "Tìm hiểu, đánh giá và xây dựng bằng những biện pháp thực hành tốt nhất về kiến trúc",
              },
              {
                title: "Sách điện tử",
                des: "Tải sách điện tử IoT cho Nhà thông minh",
              },
              {
                title: "Mã nguồn mở",
                des: "Dự án mã nguồn mở và cộng đồng",
              },
            ],
          },
          {
            menu: "Theo ngành",
            class:"solutionMenu",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "AWS App Runner",
                des: "Dựng và chạy ứng dụng web trong bộ chứa trên quy mô lớn",
              },
              {
                title: "AWS Copilot",
                des: "Dễ dàng triển khai và vận hành các ứng dụng trong bộ chứa",
              },
              {
                title: "AWS Fargate",
                des: "Điện toán phi máy chủ dành cho bộ chứa",
              },
              {
                title: "Dịch vụ Red Hat OpenShift trên AWS",
                des: "Cụm Red Hat OpenShift được quản lý",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
              {
                title: "Amazon EKS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
              {
                title: "Amazon Connect",
                des: "Trung tâm liên lạc đám mây đa kênh",
              },
            ],
            info: [
              {
                title: "AWS Well-Architected",
                des: "Tìm hiểu, đánh giá và xây dựng bằng những biện pháp thực hành tốt nhất về kiến trúc",
              },
              {
                title: "Hội thảo trực tuyến",
                des: "Đổi mới không ngừng: thảo luận về AI, IoT và Máy học",
              },
              {
                title: "Đào tạo AWS",
                des: "Phát triển kỹ năng kỹ thuật với chương trình đào tạo kỹ thuật số miễn phí",
              },
              {
                title: "Thành công của khách hàng",
                des: "Tìm hiểu xem AWS đã hỗ trợ hoạt động đổi mới cho nhiều công ty thuộc tất cả các ngành như thế nào",
              },
              {
                title: "AWS Certification",
                des: "Chứng thực trình độ chuyên môn kỹ thuật của bạn bằng Chứng chỉ AWS",
              },
              {
                title: "Đào tạo Đối tác APN",
                des: "Nâng cao kiến thức AWS để phục vụ khách hàng của bạn tốt hơn",
              },
            ],
          },
          {
            menu: "Theo loại hình tổ chức",
            class:"solutionMenu",
            des: [
              {
                title: "Sổ đăng ký bộ chứa linh hoạt của Amazon",
                des: "Dễ dàng lưu trữ, quản lý và triển khai hình ảnh bộ chứa",
              },
              {
                title: "Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
                des: "Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa",
              },
              {
                title: "Amazon ECS Anywhere",
                des: "Chạy các bộ chứa trên cơ sở hạ tầng do khách hàng quản lý",
              },
              {
                title: "Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
                des: "Giải pháp đáng tin cậy nhất để chạy Kubernetes",
              },
            ],
            info: [
              {
                title: "AWS Well-Architected",
                des: "Tìm hiểu, đánh giá và xây dựng bằng những biện pháp thực hành tốt nhất về kiến trúc",
              },
              {
                title: "Đào tạo Đối tác APN",
                des: "Nâng cao kiến thức AWS để phục vụ khách hàng của bạn tốt hơn",
              },
              {
                title: "AWS Certification",
                des: "Đọc để tìm hiểu xem AWS tăng cường đổi mới cho mọi loại hình tổ chức như thế nào",
              },
              {
                title: "Thành công của khách hàng",
                des: "Tìm hiểu xem AWS đã hỗ trợ hoạt động đổi mới cho nhiều công ty thuộc tất cả các ngành như thế nào",
              },
              {
                title: "Đào tạo AWS",
                des: "Phát triển kỹ năng kỹ thuật với chương trình đào tạo kỹ thuật số miễn phí",
              },
              {
                title: "Mạng lưới đối tác",
                des: "Hợp tác với chuyên gia được AWS chứng nhận",
              },
            ],
          },
        ],
      },
      {
        content: "Định giá",
        idMenu:"valuation",
        navMenu:[
          {
            logo:"../../assets/images/valuation1.svg",
            title:"Tìm hiểu về Giá cả của AWS",
            des:"Với AWS, bạn chỉ phải trả cho chính các dịch vụ bạn cần, trong khoảng thời gian bạn sử dụng mà không yêu cầu phải có hợp đồng dài hạn hoặc cấp phép phức tạp"
          },
          {
            logo:"../../assets/images/valuation2.svg",
            title:"Bậc miễn phí của AWS",
            des:"Bậc miễn phí của AWS bao gồm các ưu đãi miễn phí vô thời hạn, các ưu đãi có thời hạn sử dụng 12 tháng sau khi đăng ký và các ưu đãi dùng thử ngắn hạn"
          },
          {
            logo:"../../assets/images/valuation3.svg",
            title:"Công cụ tính giá AWS",
            des:"Ước tính chi phí cho giải pháp kiến trúc của bạn"
          },
          {
            logo:"../../assets/images/valuation4.svg",
            title:"Tối ưu hóa chi phí của bạn",
            des:"Tìm hiểu các bước cần thực hiện để tối ưu hóa hiệu quả chi phí AWS"
          },
        ]
      },
      {
        content: "Tài liệu",
        idMenu:"docs",
        navMenu:[
          {
            icon:"../../assets/images/docs1.svg",
            title:"Tài liệu",
            des:"Tìm tài liệu kỹ thuật cho các dịch vụ AWS, SDK và bộ công cụ, trường hợp sử dụng, tình huống và tác vụ. Duyệt tìm hướng dẫn sử dụng, hướng dẫn dành cho nhà phát triển, sách hướng dẫn và tài liệu tham khảo về API",
            viewAll:"Xem tất cả tài liệu »",
            service:{
                name:"Xem tài liệu về các dịch vụ phổ biến",
                items:[
                    {
                      icon:"../../assets/images/valuation1.svg",
                      title:"Amazon EC2"
                    },
                    {
                      icon:"../../assets/images/valuation2.svg",
                      title:"Amazon CloudFront"
                    },
                    {
                      icon:"../../assets/images/valuation3.svg",
                      title:"Dịch vụ lưu trữ đơn giản của Amazon"
                    },
                    {
                      icon:"../../assets/images/valuation4.svg",
                      title:"Quản lý danh tính và truy cập trong AWS"
                    },
                    {
                      icon:"../../assets/images/valuation2.svg",
                      title:"Giao diện dòng lệnh AWS (CLI)"
                    },
                    {
                      icon:"../../assets/images/valuation3.svg",
                      title:"Amazon RDS"
                    }
                ]   
            }
          }
        ]
      },
      {
        content: "Tìm hiểu",
        idMenu:"learn",
        navMenu:[
          {
            title:"Giới thiệu AWS",
            desMain:[
              {
                des:"Điện toán đám mây là gì »",
              },
              {
                des:"Sự hòa nhập, đa dạng và công bằng của AWS »",
              },
              {
                des:"Sự hòa nhập, đa dạng và công bằng của AWS »",
              },
              {
                des:"Cơ sở hạ tầng toàn cầu của AWS »",
              },
              {
                des:"Cổng dành cho khu vực Trung Quốc của AWS »",
              },
              {
                des:"Trung tâm khái niệm về điện toán đám mây »",
              },
            ]
          },
          {
            title:"Bắt đầu sử dụng AWS",
            desMain:[
              {
                des:"Hướng dẫn thực hành »",
              },
              {
                des:"Kiến thức cơ bản AWS »",
              },
              {
                des:"Trung tâm tài nguyên cho người mới bắt đầu »",
              },
            ]
          },
          {
            title:"Học hỏi từ các Chuyên gia AWS",
            desMain:[
              {
                des:"Tìm nội dung Đào tạo AWS »",
              },
              {
                des:"Duyệt tìm Chứng nhận AWS »",
              },
              {
                des:"Đào tạo Đối tác AWS »",
              },
              {
                des:"AWS re/Start »",
              },
              {
                des:"Học viện AWS »",
              },
            ]
          },
          {
            title:"Trung tâm nhà phát triển",
            desMain:[
              {
                des:"Khám phá Trung tâm nhà phát triển »",
              },
              {
                des:"Cộng đồng Nhà phát triển »",
              },
              {
                des:"Công cụ và SDK »",
              },
            ]
          },
          {
            title:"Trung tâm kiến trúc",
            desMain:[
              {
                des:"Khám phá biện pháp thực hành tốt nhất về kiến trúc »",
              },
              {
                des:"AWS Well-Architected »",
              },
            ]
          },
          {
            title:"Thư viện dành cho người xây dựng của Amazon",
            desMain:[
              {
                des:"Tìm hiểu cách Amazon xây dựng và vận hành phần mềm »",
              },
            ]
          },
          {
            title:"AWS Executive Insights",
            desMain:[
              {
                des:"Nhân sự cấp cao: Chiến lược và chuyển đổi »",
              },
              {
                des:"Giám đốc tài chính: Tài chính và Đầu tư »",
              },
              {
                des:"Giám đốc nhân sự: Chuyển đổi lực lượng lao động »",
              },
              {
                des:"Giám đốc nhân sự: Chuyển đổi lực lượng lao động »",
              },

            ]
          },
          {
            title:"Câu chuyện của khách hàng",
            desMain:[
              {
                des:"Câu chuyện thành công và Nghiên cứu điển hình »",
              },
              {
                des:"Đơn vị đổi mới đám mây »",
              },
              {
                des:"Podcast Fix This »",
              },
            ]
          },
          {
            title:"AWS đang tuyển dụng",
            desMain:[
              {
                des:"Tìm kiếm và ứng tuyển Việc làm tại AWS »",
              },
              {
                des:"Tìm hiểu về cuộc sống tại AWS »",
              },
              {
                des:"Khám phá các công việc ở mảng Phát triển phần mềm »",
              },
              {
                des:"Cơ hội cho sinh viên đại học và sinh viên đã tốt nghiệp »",
              },
            ]
          }
        ]

      },
      {
        content: "Mạng lưới đối tác",
        idMenu:"network",
        navMenu:[
          {
            title:"Hợp tác với đối tác AWS",
            desDiff:"Tăng tốc hành trình chuyển sang đám mây với Đối tác AWS",
            desMain:[
              {
                des:"Kết nối với một đối tác »",
              },
              {
                des:"Xem câu chuyện thành công »",
              },
              {
                des:"Xem video APN TV »",
              },
              {
                des:"Khám phá AWS Marketplace »",
              },
              {
                des:"Tìm kiếm đối tác AWS và các giải pháp »",
              },
            ]
          },
          {
            title:"Trở thành Đối tác AWS",
            desDiff:"Xây dựng, tiếp thị và bán các dịch vụ của bạn thông qua AWS",
            desMain:[
              {
                des:"Tham gia APN »",
              },
              {
                des:"Chọn Lộ trình dành cho đối tác của bạn »",
              },
              {
                des:"Phát triển doanh nghiệp của bạn với các chương trình đối tác »",
              },
              {
                des:"Sử dụng các chương trình đào tạo và chứng nhận dành cho đối tác »",
              },
              {
                des:"Khám phá các tài nguyên APN »",
              },
              {
                des:"Đăng nhập vào Trung tâm đối tác AWS »",
              },
            ]
          }
        ]
      },
      {
        content: "AWS Marketplace",
        idMenu:"AWS",
        navMenu:[
          {
            title:"AWS Marketplace",
            titleDiff:"",
            desMain:[
              {
                des:"AWS Marketplace là một danh mục kỹ thuật số được quản lý nhằm tạo điều kiện thuận lợi cho việc tìm kiếm, kiểm tra, mua và triển khai phần mềm của bên thứ ba"
              },
            ]
          },
          {
            title:"Danh mục",
            titleDiff:"Tất cả danh mục »",
            desMain:[
              {
                des:"Hệ điều hành »",
              },
              {
                des:"Khả năng bảo mật »",
              },
              {
                des:"Mở rộng mạng lưới »",
              },
              {
                des:"Lưu trữ »",
              },
              {
                des:"Phân tích dữ liệu »",
              },
              {
                des:"DevOps »",
              },
            ]
          },
          {
            title:"Giải pháp",
            titleDiff:"Tất cả các giải pháp »",
            desMain:[
              {
                des:"Ứng dụng dành cho doanh nghiệp »",
              },
              {
                des:"Phân tích dữ liệu »",
              },
              {
                des:"Khả năng bảo mật »",
              },
              {
                des:"Dịch vụ tài chính »",
              },
              {
                des:"Chăm sóc sức khỏe »",
              },
              {
                des:"Lĩnh vực công »",
              },
            ]
          },
          {
            title:"AWS Marketplace là gì »",
            titleDiff:"Duyệt tìm AWS Marketplace »",
            desMain:[
              {
                des:"Thư viện tài nguyên »",
              },
              {
                des:"Câu chuyện thành công của khách hàng »",
              },
            ]
          }
        ]
      },
      {
        content: "Tiếp cận khách hàng",
        idMenu:"client",
        navMenu:[
          {
            icon:"../../assets/images/valuation3.svg",
            title:"Dịch vụ Tiếp cận khách hàng của AWS",
            desDiff:"Di chuyển và xây dựng nhanh chóng hơn trên đám mây với các dịch vụ Tiếp cận khách hàng của AWS. Nâng cao kỹ năng đám mây cho đội ngũ của bạn nhờ kiến thức chuyên môn sâu rộng về AWS theo thời gian, địa điểm và cách thức mà bạn cần",
            titleDiff:"Tìm hiểu về dịch vụ Tiếp cận khách hàng »",
            desMain:[
              {
                title:"Hỗ trợ AWS",
                des:"Cung cấp dịch vụ khi có nhu cầu, giải quyết sự cố và hướng dẫn chủ động"
              },
              {
                title:"Đào tạo AWS",
                des:"Xây dựng kỹ năng và chứng thực chuyên môn"
              },
              {
                title:"AWS Professional Services",
                des:"Tăng cường kết quả kinh doanh"
              },
              {
                title:"Dịch vụ được AWS quản lý",
                des:"Vận hành cơ sở hạ tầng AWS cho bạn"
              },
              {
                title:"AWS IQ",
                des:"Trợ giúp theo nhu cầu từ các chuyên gia bên thứ ba được AWS chứng nhận"
              },
              {
                title:"AWS re:Post",
                des:"Trang web Hỏi đáp hướng tới cộng đồng và giúp loại bỏ các rào cản kỹ thuật"
              },
            ]
          },
        ]
      },
      {
        content: "Sự kiện",
        idMenu:"event",
        navMenu:[
          {
            title:"Sự kiện và hội thảo trực tuyến AWS",
            des:"Cộng đồng điện toán đám mây cùng quy tụ cả trên mạng lẫn ngoài đời thực để kết nối, cộng tác và học hỏi từ các chuyên gia AWS.",
            desDiff:"Xem sự kiện sắp diễn ra »"
          },
          {
            title:"Nội dung sự kiện AWS",
            des:"Khám phá, xem và tải xuống bản thuyết trình từ phiên mà bạn yêu thích.",
            desDiff:"Duyệt xem nội dung sự kiện »"
          },
          {
            title:"AWS re:Invent",
            des:"Tham gia cộng đồng đám mây toàn cầu để có mặt tại sự kiện chuyển đổi công nghệ bậc nhất từ ngày 28 tháng 11 – ngày 2 tháng 12 năm 2022.",
            desDiff:"Đăng ký ngay »"
          },
          {
            title:"Thảo luận công nghệ trực tuyến",
            des:"Các buổi thuyết trình trực tiếp qua mạng, đề cập đến nhiều chủ đề khác nhau ở nhiều cấp độ kỹ thuật.",
            desDiff:"Xem buổi tọa đàm trực tuyến về công nghệ »"
          },
          {
            title:"Sự kiện dành cho Lĩnh vực công",
            des:"Đăng ký để tham dự một sự kiện dành cho lĩnh vực công của chúng tôi hoặc kết nối với chúng tôi tại các sự kiện trong ngành trên khắp thế giới.",
            desDiff:"Duyệt xem sự kiện dành cho Lĩnh vực công »"
          },
          {
            title:"Sự kiện và hội thảo trực tuyến của AWS Training and Certification",
            des:"Các sự kiện cả trực tuyến lẫn ngoài đời thực giúp các nhà xây dựng hiện nay và tương lai tận dụng sức mạnh của Đám mây AWS.",
            desDiff:"Duyệt xem sự kiện về đào tạo và chứng nhận »"
          },
        ]
      },
      {
        content: "Khám phá thêm",
        idMenu:"more",
        navMenu:[
          {
            title:"Duy trì kết nối",
            desMain:[
                {
                  des:"Blog AWS »"
                },
                {
                  des:"Sự kiện và hội thảo trực tuyến »"
                },
                {
                  des:"Tin tức về AWS »"
                },
                {
                  des:"Thông tin mới »"
                },
                {
                  des:"re:Invent »"
                },
                {
                  des:"Thông cáo báo chí »"
                },
            ]
          },
          {
            title:"Tài nguyên",
            desMain:[
                {
                  des:"Báo cáo của chuyên gia phân tích »"
                },
                {
                  des:"AWS Executive Insights »"
                },
                {
                  des:"Trung tâm kiến trúc AWS »"
                },
                {
                  des:"Tài liệu »"
                },
                {
                  des:"Báo cáo nghiên cứu chuyên sâu và hướng dẫn AWS »"
                },
                {
                  des:"AWS Educate »"
                },
            ]
          },
          {
            title:"Liên kết hữu ích",
            desMain:[
                {
                  des:"Trung tâm kiến thức »"
                },
                {
                  des:"AWS re:Post »"
                },
                {
                  des:"Câu hỏi thường gặp về sản phẩm kỹ thuật »"
                },
                {
                  des:"Trung tâm hỗ trợ khách hàng »"
                },
                {
                  des:"Bảng điều khiển Trạng thái AWS »"
                },
                {
                  des:"Cách mua AWS dành cho lĩnh vực công »"
                },
            ]
          },
          {
            title:"Dịch vụ chuyên nghiệp và được quản lý",
            desMain:[
                {
                  des:"AWS Professional Services »"
                },
                {
                  des:"Dịch vụ được AWS quản lý »"
                },
            ]
          },
          {
            title:"Hỗ trợ",
            desMain:[
                {
                  des:"So sánh các gói hỗ trợ »"
                },
                {
                  des:"Truy cập Trung tâm kiến thức »"
                },
                {
                  des:"Tìm hiểu thêm về Hỗ trợ AWS »"
                },
            ]
          },
        ]
      },
    ],
  },
};
