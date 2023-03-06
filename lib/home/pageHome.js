const actionItems = {
    service:[
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Dịch vụ lưu trữ đơn giản của Amazon (s3)",
            des:"Dịch vụ lưu trữ đối tượng được xây dựng để truy xuất dữ liệu thuộc mọi kích thước và từ mọi nơi"
        },
        {
            free:"",
            title:"Amazon Aurora",
            des:"Cơ sở dữ liệu quan hệ được quản lý, có hiệu năng cao"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon DynamoDB",
            des:"Cơ sở dữ liệu NoSQL được quản lý"
        },
    ],
    analysis:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Truy vấn dữ liệu trong S3 bằng SQL"
        },
        {
            free:"",
            title:"Amazon CloudSearch",
            des:"Dịch vụ tìm kiếm được quản lý"
        },
        {
            free:"",
            title:"Amazon Kinesis",
            des:"Phân tích luồng video và dữ liệu trong thời gian thực"
        },
        {
            free:"",
            title:"Amazon OpenSearch Service",
            des:"Tìm kiếm, trực quan hóa và phân tích lên đến hàng petabyte văn bản cũng như dữ liệu không có cấu trúc"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Redshift",
            des:"Lưu kho dữ liệu nhanh, đơn giản và tiết kiệm chi phí"
        },
    ],
    manage:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Thiết lập ngân sách sử dụng và chi phí tùy chỉnh"
        },
        {
            free:"",
            title:"AWS Cost and Usage Report",
            des:"Tiếp cận thông tin toàn diện về mặt chi phí và lượng sử dụng"
        },
        {
            free:"",
            title:"AWS Cost Explorer",
            des:"Phân tích chi phí và mức sử dụng AWS của bạn"
        },
        {
            free:"",
            title:"Báo cáo phiên bản đặt trước (RI)",
            des:"Phân tích chuyên sâu phiên bản đặt trước (RI)"
        },
        {
            free:"",
            title:"Savings Plans",
            des:"Tiết kiệm đến 72% cho mức sử dụng điện toán với mức giá linh hoạt"
        },
    ],
    cloud:[
        {
            free:"",
            title:"Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
            des:"Giải pháp đáng tin cậy nhất để chạy Kubernetes"
        },
        {
            free:"",
            title:"Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
            des:"Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"",
            title:"Amazon EC2 Auto Scaling",
            des:"Thay đổi quy mô năng lực điện toán nhằm đáp ứng nhu cầu"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
    ],
    container:[
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Dịch vụ lưu trữ đơn giản của Amazon (s3)",
            des:"Dịch vụ lưu trữ đối tượng được xây dựng để truy xuất dữ liệu thuộc mọi kích thước và từ mọi nơi"
        },
        {
            free:"",
            title:"Amazon Aurora",
            des:"Cơ sở dữ liệu quan hệ được quản lý, có hiệu năng cao"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon DynamoDB",
            des:"Cơ sở dữ liệu NoSQL được quản lý"
        },
    ],
    data:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Truy vấn dữ liệu trong S3 bằng SQL"
        },
        {
            free:"",
            title:"Amazon CloudSearch",
            des:"Dịch vụ tìm kiếm được quản lý"
        },
        {
            free:"",
            title:"Amazon Kinesis",
            des:"Phân tích luồng video và dữ liệu trong thời gian thực"
        },
        {
            free:"",
            title:"Amazon OpenSearch Service",
            des:"Tìm kiếm, trực quan hóa và phân tích lên đến hàng petabyte văn bản cũng như dữ liệu không có cấu trúc"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Redshift",
            des:"Lưu kho dữ liệu nhanh, đơn giản và tiết kiệm chi phí"
        },
    ],
    frontend:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Thiết lập ngân sách sử dụng và chi phí tùy chỉnh"
        },
        {
            free:"",
            title:"AWS Cost and Usage Report",
            des:"Tiếp cận thông tin toàn diện về mặt chi phí và lượng sử dụng"
        },
        {
            free:"",
            title:"AWS Cost Explorer",
            des:"Phân tích chi phí và mức sử dụng AWS của bạn"
        },
        {
            free:"",
            title:"Báo cáo phiên bản đặt trước (RI)",
            des:"Phân tích chuyên sâu phiên bản đặt trước (RI)"
        },
        {
            free:"",
            title:"Savings Plans",
            des:"Tiết kiệm đến 72% cho mức sử dụng điện toán với mức giá linh hoạt"
        },
    ],
    internet:[
        {
            free:"",
            title:"Dịch vụ Kubernetes linh hoạt Amazon (EKS)",
            des:"Giải pháp đáng tin cậy nhất để chạy Kubernetes"
        },
        {
            free:"",
            title:"Dịch vụ bộ chứa linh hoạt của Amazon (ECS)",
            des:"Dịch vụ có độ bảo mật cao, đáng tin cậy và quy mô linh hoạt để chạy các bộ chứa"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"",
            title:"Amazon EC2 Auto Scaling",
            des:"Thay đổi quy mô năng lực điện toán nhằm đáp ứng nhu cầu"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
    ],
    machine:[
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Dịch vụ lưu trữ đơn giản của Amazon (s3)",
            des:"Dịch vụ lưu trữ đối tượng được xây dựng để truy xuất dữ liệu thuộc mọi kích thước và từ mọi nơi"
        },
        {
            free:"",
            title:"Amazon Aurora",
            des:"Cơ sở dữ liệu quan hệ được quản lý, có hiệu năng cao"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon DynamoDB",
            des:"Cơ sở dữ liệu NoSQL được quản lý"
        },
    ],
    connect:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Truy vấn dữ liệu trong S3 bằng SQL"
        },
        {
            free:"",
            title:"Amazon CloudSearch",
            des:"Dịch vụ tìm kiếm được quản lý"
        },
        {
            free:"",
            title:"Amazon Kinesis",
            des:"Phân tích luồng video và dữ liệu trong thời gian thực"
        },
        {
            free:"",
            title:"Amazon OpenSearch Service",
            des:"Tìm kiếm, trực quan hóa và phân tích lên đến hàng petabyte văn bản cũng như dữ liệu không có cấu trúc"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Redshift",
            des:"Lưu kho dữ liệu nhanh, đơn giản và tiết kiệm chi phí"
        },
    ],
    security:[
        {
            free:"",
            title:"Amazon Athena",
            des:"Thiết lập ngân sách sử dụng và chi phí tùy chỉnh"
        },
        {
            free:"",
            title:"AWS Cost and Usage Report",
            des:"Tiếp cận thông tin toàn diện về mặt chi phí và lượng sử dụng"
        },
        {
            free:"",
            title:"AWS Cost Explorer",
            des:"Phân tích chi phí và mức sử dụng AWS của bạn"
        },
        {
            free:"",
            title:"Báo cáo phiên bản đặt trước (RI)",
            des:"Phân tích chuyên sâu phiên bản đặt trước (RI)"
        },
        {
            free:"",
            title:"Savings Plans",
            des:"Tiết kiệm đến 72% cho mức sử dụng điện toán với mức giá linh hoạt"
        },
    ],
    nonServer:[
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Dịch vụ lưu trữ đơn giản của Amazon (s3)",
            des:"Dịch vụ lưu trữ đối tượng được xây dựng để truy xuất dữ liệu thuộc mọi kích thước và từ mọi nơi"
        },
        {
            free:"",
            title:"Amazon Aurora",
            des:"Cơ sở dữ liệu quan hệ được quản lý, có hiệu năng cao"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon DynamoDB",
            des:"Cơ sở dữ liệu NoSQL được quản lý"
        },
    ],
    capacity:[
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon Lightsail",
            des:"Chạy và quản lý máy chủ riêng ảo"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon EC2",
            des:"Máy chủ ảo trên đám mây"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Dịch vụ lưu trữ đơn giản của Amazon (s3)",
            des:"Dịch vụ lưu trữ đối tượng được xây dựng để truy xuất dữ liệu thuộc mọi kích thước và từ mọi nơi"
        },
        {
            free:"",
            title:"Amazon Aurora",
            des:"Cơ sở dữ liệu quan hệ được quản lý, có hiệu năng cao"
        },
        {
            free:"Bản Dùng Thử Miễn Phí",
            title:"Amazon DynamoDB",
            des:"Cơ sở dữ liệu NoSQL được quản lý"
        },
    ]
}

const actionProvide = {
    solution:[
        {
            image:"../../assets/images/provide1.jpg",
            title:"BMW Group",
            des:"Hợp lý hóa các quy trình kinh doanh đa ngôn ngữ và giảm hơn 75% thời gian chuyển ngữ"
        },
        {
            image:"../../assets/images/provide2.jpg",
            title:"Coca-Cola",
            des:"Xây dựng hồ dữ liệu để tăng 80% năng suất phân tích"
        },
        {
            image:"../../assets/images/provide3.jpg",
            title:"Epic Games",
            des:"Tạo dựng môi trường giải trí tiên tiến cho hơn 350 triệu người chơi"
        },
        {
            image:"../../assets/images/provide4.jpg",
            title:"Netflix",
            des:"Cung cấp nội dung giải trí giành giải thưởng cho hơn 200 triệu thành viên"
        },
    ],
    advertise:[
        {
            image:"../../assets/images/provide5.jpg",
            title:"FreeWheel",
            des:"Sử dụng công nghệ máy học để dự đoán không gian quảng cáo trên TV và video kỹ thuật số với quy mô lớn"
        },
        {
            image:"../../assets/images/provide6.jpg",
            title:"Pinterest",
            des:"Lưu trữ hàng tỷ hình ảnh cho hơn 450 triệu người dùng khám phá hàng tháng"
        },
        {
            image:"../../assets/images/provide7.jpg",
            title:"Salesforce",
            des:"Hợp nhất dữ liệu để tạo hàng tỷ hồ sơ khách hàng 360 độ"
        },
        {
            image:"../../assets/images/provide8.jpg",
            title:"Snap",
            des:"Hỗ trợ hơn 306 triệu người dùng gửi 5,4 tỷ tin nhắn trên Snap"
        },
    ],
    air:[
        {
            image:"../../assets/images/provide9.jpg",
            title:"Capella Space",
            des:"Truy cập dữ liệu vệ tinh trong vài phút để giải quyết các vấn đề toàn cầu"
        },
        {
            image:"../../assets/images/provide10.jpg",
            title:"Maxar Technologies",
            des:"Đưa ra dự báo nhanh hơn 58% so với siêu máy tính dự báo thời tiết"
        },
        {
            image:"../../assets/images/provide11.jpg",
            title:"Inmarsat",
            des:"Quản lý 20 triệu yêu cầu mỗi giây để duy trì sự an toàn cho lĩnh vực hàng hải và hàng không"
        },
        {
            image:"../../assets/images/provide12.jpg",
            title:"NASA’s Jet Propulsion Laboratory",
            des:"Xử lý dữ liệu thiết kế kỹ thuật và sứ mệnh hành tinh trên đám mây"
        },
    ],
    agricult:[
        {
            image:"../../assets/images/provide13.jpg",
            title:"AGCO Corporation",
            des:"Cải thiện quá trình phân tích dự đoán, đồng thời giảm 78% chi phí"
        },
        {
            image:"../../assets/images/provide14.jpg",
            title:"BASF Digital Farming",
            des:"Tạo điều kiện cho nông dân đưa ra quyết định thông minh hơn"
        },
        {
            image:"../../assets/images/provide15.jpg",
            title:"Carrier Global",
            des:"Giảm hư hỏng thực phẩm trong chuỗi đông lạnh"
        },
        {
            image:"../../assets/images/provide16.jpg",
            title:"Yara",
            des:"Số hóa hoạt động sản xuất cây trồng để tăng hiệu quả một cách an toàn và bền vững"
        },
    ],
    industry:[
        {
            image:"../../assets/images/provide1.jpg",
            title:"BMW Group",
            des:"Hợp lý hóa các quy trình kinh doanh đa ngôn ngữ và giảm hơn 75% thời gian chuyển ngữ"
        },
        {
            image:"../../assets/images/provide2.jpg",
            title:"Coca-Cola",
            des:"Xây dựng hồ dữ liệu để tăng 80% năng suất phân tích"
        },
        {
            image:"../../assets/images/provide3.jpg",
            title:"Epic Games",
            des:"Tạo dựng môi trường giải trí tiên tiến cho hơn 350 triệu người chơi"
        },
        {
            image:"../../assets/images/provide4.jpg",
            title:"Netflix",
            des:"Cung cấp nội dung giải trí giành giải thưởng cho hơn 200 triệu thành viên"
        },
    ],
    education:[
        {
            image:"../../assets/images/provide5.jpg",
            title:"FreeWheel",
            des:"Sử dụng công nghệ máy học để dự đoán không gian quảng cáo trên TV và video kỹ thuật số với quy mô lớn"
        },
        {
            image:"../../assets/images/provide6.jpg",
            title:"Pinterest",
            des:"Lưu trữ hàng tỷ hình ảnh cho hơn 450 triệu người dùng khám phá hàng tháng"
        },
        {
            image:"../../assets/images/provide7.jpg",
            title:"Salesforce",
            des:"Hợp nhất dữ liệu để tạo hàng tỷ hồ sơ khách hàng 360 độ"
        },
        {
            image:"../../assets/images/provide8.jpg",
            title:"Snap",
            des:"Hỗ trợ hơn 306 triệu người dùng gửi 5,4 tỷ tin nhắn trên Snap"
        },
    ],
    pow:[
        {
            image:"../../assets/images/provide13.jpg",
            title:"AGCO Corporation",
            des:"Cải thiện quá trình phân tích dự đoán, đồng thời giảm 78% chi phí"
        },
        {
            image:"../../assets/images/provide14.jpg",
            title:"BASF Digital Farming",
            des:"Tạo điều kiện cho nông dân đưa ra quyết định thông minh hơn"
        },
        {
            image:"../../assets/images/provide15.jpg",
            title:"Carrier Global",
            des:"Giảm hư hỏng thực phẩm trong chuỗi đông lạnh"
        },
        {
            image:"../../assets/images/provide16.jpg",
            title:"Yara",
            des:"Số hóa hoạt động sản xuất cây trồng để tăng hiệu quả một cách an toàn và bền vững"
        },
    ],
    finance:[
        {
            image:"../../assets/images/provide13.jpg",
            title:"AGCO Corporation",
            des:"Cải thiện quá trình phân tích dự đoán, đồng thời giảm 78% chi phí"
        },
        {
            image:"../../assets/images/provide14.jpg",
            title:"BASF Digital Farming",
            des:"Tạo điều kiện cho nông dân đưa ra quyết định thông minh hơn"
        },
        {
            image:"../../assets/images/provide15.jpg",
            title:"Carrier Global",
            des:"Giảm hư hỏng thực phẩm trong chuỗi đông lạnh"
        },
        {
            image:"../../assets/images/provide16.jpg",
            title:"Yara",
            des:"Số hóa hoạt động sản xuất cây trồng để tăng hiệu quả một cách an toàn và bền vững"
        },
    ],
    government:[
        {
            image:"../../assets/images/provide1.jpg",
            title:"BMW Group",
            des:"Hợp lý hóa các quy trình kinh doanh đa ngôn ngữ và giảm hơn 75% thời gian chuyển ngữ"
        },
        {
            image:"../../assets/images/provide2.jpg",
            title:"Coca-Cola",
            des:"Xây dựng hồ dữ liệu để tăng 80% năng suất phân tích"
        },
        {
            image:"../../assets/images/provide3.jpg",
            title:"Epic Games",
            des:"Tạo dựng môi trường giải trí tiên tiến cho hơn 350 triệu người chơi"
        },
        {
            image:"../../assets/images/provide4.jpg",
            title:"Netflix",
            des:"Cung cấp nội dung giải trí giành giải thưởng cho hơn 200 triệu thành viên"
        },
    ],
    health:[
        {
            image:"../../assets/images/provide5.jpg",
            title:"FreeWheel",
            des:"Sử dụng công nghệ máy học để dự đoán không gian quảng cáo trên TV và video kỹ thuật số với quy mô lớn"
        },
        {
            image:"../../assets/images/provide6.jpg",
            title:"Pinterest",
            des:"Lưu trữ hàng tỷ hình ảnh cho hơn 450 triệu người dùng khám phá hàng tháng"
        },
        {
            image:"../../assets/images/provide7.jpg",
            title:"Salesforce",
            des:"Hợp nhất dữ liệu để tạo hàng tỷ hồ sơ khách hàng 360 độ"
        },
        {
            image:"../../assets/images/provide8.jpg",
            title:"Snap",
            des:"Hỗ trợ hơn 306 triệu người dùng gửi 5,4 tỷ tin nhắn trên Snap"
        },
    ],
    manufacture:[
        {
            image:"../../assets/images/provide9.jpg",
            title:"Capella Space",
            des:"Truy cập dữ liệu vệ tinh trong vài phút để giải quyết các vấn đề toàn cầu"
        },
        {
            image:"../../assets/images/provide10.jpg",
            title:"Maxar Technologies",
            des:"Đưa ra dự báo nhanh hơn 58% so với siêu máy tính dự báo thời tiết"
        },
        {
            image:"../../assets/images/provide11.jpg",
            title:"Inmarsat",
            des:"Quản lý 20 triệu yêu cầu mỗi giây để duy trì sự an toàn cho lĩnh vực hàng hải và hàng không"
        },
        {
            image:"../../assets/images/provide12.jpg",
            title:"NASA’s Jet Propulsion Laboratory",
            des:"Xử lý dữ liệu thiết kế kỹ thuật và sứ mệnh hành tinh trên đám mây"
        },
    ],
    media:[
        {
            image:"../../assets/images/provide13.jpg",
            title:"AGCO Corporation",
            des:"Cải thiện quá trình phân tích dự đoán, đồng thời giảm 78% chi phí"
        },
        {
            image:"../../assets/images/provide14.jpg",
            title:"BASF Digital Farming",
            des:"Tạo điều kiện cho nông dân đưa ra quyết định thông minh hơn"
        },
        {
            image:"../../assets/images/provide15.jpg",
            title:"Carrier Global",
            des:"Giảm hư hỏng thực phẩm trong chuỗi đông lạnh"
        },
        {
            image:"../../assets/images/provide16.jpg",
            title:"Yara",
            des:"Số hóa hoạt động sản xuất cây trồng để tăng hiệu quả một cách an toàn và bền vững"
        },
    ],
    consumption:[
        {
            image:"../../assets/images/provide1.jpg",
            title:"BMW Group",
            des:"Hợp lý hóa các quy trình kinh doanh đa ngôn ngữ và giảm hơn 75% thời gian chuyển ngữ"
        },
        {
            image:"../../assets/images/provide2.jpg",
            title:"Coca-Cola",
            des:"Xây dựng hồ dữ liệu để tăng 80% năng suất phân tích"
        },
        {
            image:"../../assets/images/provide3.jpg",
            title:"Epic Games",
            des:"Tạo dựng môi trường giải trí tiên tiến cho hơn 350 triệu người chơi"
        },
        {
            image:"../../assets/images/provide4.jpg",
            title:"Netflix",
            des:"Cung cấp nội dung giải trí giành giải thưởng cho hơn 200 triệu thành viên"
        },
    ]
}

export const libHome = {
    rank:{
        name:"rank",
        items:[
            {
                title:"Bậc miễn phí",
                des:"Sử dụng Amazon EC2, S3, v.v. – miễn phí trong cả năm",
                more:"Tìm hiểu thêm >>",
                icon:"../../assets/images/valuation1.svg"
            },
            {
                title:"Câu hỏi thường gặp về đăng ký",
                des:"Khám khá các câu hỏi thường gặp về quá trình đăng ký",
                more:"Tìm hiểu thêm >>",
                icon:"../../assets/images/valuation2.svg"
            },
            {
                title:"Hãy liên hệ với chúng tôi",
                des:"Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào liên quan đến AWS",
                more:"Tìm hiểu thêm >>",
                icon:"../../assets/images/valuation3.svg"
            },
        ]
    },
    solution:{
        name:"solution",
        items:[
            {
                title:"Giải pháp",
                des:"Xem thư viện Giải pháp AWS của chúng tôi"
            },
            {
                title:"Tìm hiểu các sản phẩm của chúng tôi",
                des:"Khám phá các sản phẩm dựa trên đám mây của chúng tôi"
            },
            {
                title:"Đào tạo và chứng nhận",
                des:"Tìm hiểu cách xây dựng trên AWS"
            },
            {
                title:"Cung cấp giải pháp sáng tạo cho khách hàng",
                des:"Đọc câu chuyện thành công của khách hàng"
            },
            {
                title:"Bảo mật và tuân thủ",
                des:"Tăng cường bảo mật đám mây với AWS"
            },
        ]
    },
    discover:{
        name:"discover",
        branch:[
            {
                icon:"../../assets/images/valuation1.svg",
                title:"Quảng cáo và tiếp thị",
                des:"Tiết kiệm chi phí cho hoạt động phân tích với quy mô petabyte và khối lượng công việc với độ trễ chỉ vài mili giây."
            },
            {
                icon:"../../assets/images/valuation2.svg",
                title:"Dịch vụ tài chính",
                des:"Ít tốn kém chi phí. Thêm khả năng phục hồi. Khám phá giải pháp của AWS cho các lĩnh vực ngân hàng, thanh toán, thị trường vốn và bảo hiểm."
            },
            {
                icon:"../../assets/images/valuation3.svg",
                title:"Công nghệ trò chơi",
                des:"Tạo ra những trò chơi không ai nghĩ tới dựa trên công nghệ điện toán trong mọi thể loại và nền tảng."
            },
            {
                icon:"../../assets/images/valuation4.svg",
                title:"Chính quyền tiểu bang và địa phương",
                des:"Chuyển đổi dữ liệu thành thông tin chuyên sâu, hiện đại hóa ứng dụng và thu hút công dân – với độ tin cậy và bảo mật mà chính phủ cần."
            },
        ],
        items:[
            {
                icon:"../../assets/images/valuation4.svg",
                title:"Phân tích và hồ dữ liệu",
                des:"Lưu trữ, phân loại và phân tích một cách bảo mật toàn bộ dữ liệu của bạn trong một kho lưu trữ tập trung."
            },
            {
                icon:"../../assets/images/valuation3.svg",
                title:"Máy học",
                des:"Xây dựng bằng các dịch vụ và nền tảng mạnh mẽ, và sự hỗ trợ của hệ thống khung máy học rộng lớn nhất ở bất cứ nơi nào."
            },
            {
                icon:"../../assets/images/valuation2.svg",
                title:"Điện toán phi máy chủ",
                des:"Dựng và chạy ứng dụng và dịch vụ mà không cần phải bận tâm đến máy chủ."
            },
            {
                icon:"../../assets/images/valuation1.svg",
                title:"Dung lượng lưu trữ",
                des:"Các lựa chọn có độ bền cao, tiết kiệm chi phí để sao lưu, phục hồi sau thảm họa và lưu trữ dữ liệu ở quy mô petabyte."
            }
        ]
    },
    service:{
        name:"service",
        items:[
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Dịch vụ nỗi bật",
                view:"Xem tất cả các danh mục sản phẩm >>",
                actionItems:actionItems.service,
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Phân tích",
                view:"Xem tất cả các sản phẩm phân tích >>",
                actionItems:actionItems.analysis,
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Quản lý tài chính trên đám mây",
                view:"Xem tất cả các sản phẩm quản lý tài chính trên đám mây >>",
                actionItems:actionItems.manage,
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                title:"Điện toán",
                view:"Xem tất cả các sản phẩm điện toán >>",
                actionItems:actionItems.cloud,
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Bộ chứa",
                view:"Xem tất cả các sản phẩm bộ chứa >>",
                actionItems:actionItems.container
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Cơ sỏ dữ liệu",
                view:"Xem tất cả các sản phẩm cơ sở dữ liệu >>",
                actionItems:actionItems.data
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Front end web và di động",
                view:"Xem tất cả các sản phẩm front-end web & di động >>",
                actionItems:actionItems.frontend
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                view:"Xem tất cả các sản phẩm Internet vạn vật >>",
                title:"Internet vạn vật",
                actionItems:actionItems.internet
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Máy học",
                view:"Xem tất cả các sản phẩm máy học >>",
                actionItems:actionItems.machine
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Kết nối mạng và phân phối nội dung",
                view:"Xem tất cả các sản phẩm kết nối mạng và phân phối nội dung >>",
                actionItems:actionItems.connect
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Bảo mật, định danh và tuân thủ",
                view:"Xem tất cả các sản phẩm bảo mật, định danh và tuân thủ  >>",
                actionItems:actionItems.security
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                title:"Phi máy chủ",
                view:"Xem tất cả các sản phẩm phi máy chủ >>",
                actionItems:actionItems.nonServer
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Dung lượng lưu trữ",
                view:"Xem tất cả các sản phẩm lưu trữ >>",
                actionItems:actionItems.capacity
            },
        ]
    },
    train:{
        name:"train",
        items:[
            {
                icon:"../../assets/images/train1.png",
                title:"Đào tạo trực tuyến miễn phí",
                des:"Học hỏi và thực hành với hơn 500 khóa học kỹ thuật số miễn phí do các chuyên gia AWS xây dựng",
                titleDiff:"Tham gia khóa học kỹ thuật số »"
            },
            {
                icon:"../../assets/images/train2.png",
                title:"Khóa học AWS đề xuất",
                des:"Bắt đầu xây dựng ngay hôm nay bằng các hướng dẫn Tăng cường với những tài nguyên tuyển chọn để tăng cường kiến thức của bạn về AWS",
                titleDiff:"Duyệt tìm theo Vai trò hoặc Giải pháp »"
            },
            {
                icon:"../../assets/images/train3.png",
                title:"AWS Certification",
                des:"Phát triển sự nghiệp và doanh nghiệp với các chứng chỉ được toàn ngành công nhận giúp xác thực kỹ năng đám mây của bạn",
                titleDiff:"Tìm hiểu thêm về AWS Certification »"
            },
        ]
    },
    provide:{
        name:"provide",
        items:[
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Giải pháp sáng tạo cho khách hàng tiêu biểu",
                view:"Xem tất cả các câu chuyện khách hàng >>",
                actionItems:actionProvide.solution,
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Quảng cáo và tiếp thị",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực quảng cáo và tiếp thị >>",
                actionItems:actionProvide.advertise,
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Hàng không vũ trụ và vệ tinh",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Hàng không vũ trụ và vệ tinh >>",
                actionItems:actionProvide.air,
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                title:"Nông nghiệp",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Nông nghiệp >>",
                actionItems:actionProvide.agricult,
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Công nghệ và ô tô",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Công nghiệp ô tô >>",
                actionItems:actionProvide.industry
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Giáo dục",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Giáo dục >>",
                actionItems:actionProvide.education
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Năng lượng",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Năng lượng >>",
                actionItems:actionProvide.pow
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                title:"Dịch vụ tài chính",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Dịch vụ tài chính >>",
                actionItems:actionProvide.finance
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Chính phủ",
                view:"Xem tất cả các câu chuyện về Chính phủ >>",
                actionItems:actionProvide.government
            },
            {   
                icon:"../../assets/images/valuation2.svg",
                title:"Chăm sóc sức khỏe và khoa học đời sống",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Chăm sóc sức khỏe và khoa học đời sống >>",
                actionItems:actionProvide.health
            },
            {   
                icon:"../../assets/images/valuation3.svg",
                title:"Sản xuất",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Sản xuất >>",
                actionItems:actionProvide.manufacture
            },
            {   
                icon:"../../assets/images/valuation4.svg",
                title:"Truyền thông và giải trí",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Truyền thông và giải trí >>",
                actionItems:actionProvide.media
            },
            {   
                icon:"../../assets/images/valuation1.svg",
                title:"Bán lẻ | Hàng tiêu dùng đóng gói",
                view:"Xem tất cả các câu chuyện của khách hàng thuộc lĩnh vực Bán lẻ và hàng tiêu dùng đóng gói >>",
                actionItems:actionProvide.consumption
            },
        ]
    },
    build:{
        name:"build",
        items:[
            {
                icon:"../../assets/images/build1.png",
                title:"Bảo mật",
                des:"Khả năng bảo mật toàn diện để đáp ứng các yêu cầu khắt khe nhất.",
            },
            {
                icon:"../../assets/images/build2.png",
                title:"Tuân thủ",
                des:"Khả năng kiểm soát đa dạng, nhiều chứng nhận kiểm toán và bảo mật được áp dụng rộng rãi.",
            },
            {
                icon:"../../assets/images/build3.png",
                title:"Lai",
                des:"Xây dựng kiến trúc lai giúp mở rộng cơ sở hạ tầng tại chỗ của bạn lên Đám mây.",
            },
            {
                icon:"../../assets/images/build4.png",
                title:"Có khả năng mở rộng",
                des:"Truy cập tùy theo nhu cầu của bạn, tăng và giảm quy mô theo yêu cầu với thông báo chỉ trong vài phút.",
            },
        ]
    },
    report:{
        name:"report",
        items:[
            {
                icon:"../../assets/images/report1.png",
                title:"Báo cáo từ chuyên gia phân tích",
                des:"Đọc để xem các tổ chức phân tích hàng đầu như Gartner và IDC nhận xét về AWS như thế nào",
            },
            {
                icon:"../../assets/images/report2.png",
                title:"Đào tạo AWS",
                des:"Các khóa học kỹ thuật số miễn phí để giúp bạn phát triển kỹ năng của mình",
            },
            {
                icon:"../../assets/images/report3.png",
                title:"Mạng lưới đối tác AWS",
                des:"Tham gia Mạng lưới đối tác AWS để xây dựng và phát triển hoạt động kinh doanh trên đám mây của bạn",
            },
            {
                icon:"../../assets/images/report4.png",
                title:"Amazon Builders' Library",
                des:"Tìm hiểu cách Amazon xây dựng và vận hành phần mềm từ chính các nhà xây dựng",
            }, 
        ]
    }
}