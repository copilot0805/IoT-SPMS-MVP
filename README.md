# IoT Smart Parking Management System (MVP Prototype)

## 📌 Tổng quan về phương pháp Prototype Local
Team chúng ta thống nhất sẽ không nhúng trực tiếp Figma vào Web để tránh lag và phụ thuộc vào internet khi demo. Thay vào đó, chúng ta dùng phương pháp **"Hồn Code - Da Thiết kế"**:
1. **Giao diện (UI):** Sử dụng ảnh export trực tiếp từ Figma (Pixel-perfect).
2. **Tương tác (Logic):** Chồng các lớp HTML tàng hình (Hotspots) lên ảnh để xử lý logic (đăng nhập, chuyển trang, báo lỗi).

## 📂 Cấu trúc thư mục Assets
Mọi người khi export ảnh từ Figma vui lòng lưu đúng vào:
- `assets/images/`: Chứa các ảnh màn hình `.png` hoặc `.jpg`.
- Quy tắc đặt tên: `uc[ID]_[tên_màn_hình].png` (Vd: `uc01_login.png`).

## 🛠 Cách phát triển Module mới
Nếu bạn được giao làm một UC (Use Case) mới, hãy làm theo các bước:
1. **Export ảnh:** Từ Figma export frame đúng tỉ lệ (iPhone 14/15 Pro).
2. **Tạo file HTML:** Sử dụng template trong `views/common/uc01_login_mobile.html`.
3. **Căn chỉnh Hotspot:**
   - Dùng class `.hotspot` để tạo vùng bấm.
   - Mở trình duyệt, nhấn **F12**, chỉnh tọa độ `top`, `left` bằng phím mũi tên cho khít với ảnh.
   - Copy thông số từ F12 dán ngược lại vào code.

## 🔑 Thông tin đăng nhập Test (Hard-coded)
- **MSSV:** `2011234`
- **Mật khẩu:** `123`
