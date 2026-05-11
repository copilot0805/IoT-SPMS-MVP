# 🚗 IoT Smart Parking Management System (MVP Prototype)

Đây là bản Frontend Prototype mô phỏng luồng hoạt động End-to-End của hệ thống bãi đỗ xe thông minh (Smart Parking) dành cho ĐHBK TP.HCM (HCMUT). Dự án tích hợp giao diện quản lý trên Mobile (Sinh viên), Kiosk Bảo vệ, Bảng LED hiển thị và Admin Dashboard.

## 🛠️ Yêu cầu cài đặt (Prerequisites)
1. **Visual Studio Code (VS Code)**.
2. Extension **Live Server** (Bắt buộc phải dùng Live Server để `localStorage` có thể đồng bộ dữ liệu giữa các màn hình).

## 🚀 Hướng dẫn chạy dự án (How to Run)
Để test đầy đủ các kịch bản liên kết giữa các thiết bị, bạn cần mở **3 cửa sổ trình duyệt song song** (cùng chung 1 host `http://127.0.0.1:5500/...`):

1. **Màn hình Điện thoại / Admin:** Chuột phải vào file `simulator_mobile.html` ngoài thư mục gốc -> Chọn **Open with Live Server**.
2. **Màn hình Kiosk Bảo vệ:** Mở tab mới, truy cập vào `views/guard/uc03_04.html`.
3. **Màn hình Bảng LED:** Mở tab mới, truy cập vào `views/led/uc06_led_display.html`.

---

## 🧪 Các Kịch Bản Test (Test Cases & Flows)

### 1. Luồng Sinh Viên Vào Bãi (Student Entry Flow)
* **Mobile:** Đăng nhập tài khoản Sinh viên (MSSV: `2011234` / Pass: `123`). App sẽ vào màn hình Dashboard.
* **Kiosk:** Chọn màn hình **Cổng Vào** -> Nhấn vào khu vực **Quét thẻ**.
* **Kỳ vọng:**
  * Kiosk hiện "Access Granted" màu xanh.
  * Bảng LED tự động sáng lên màu xanh báo hiệu xe vào.
  * Mobile App tự động chuyển qua chuỗi màn hình: `Waiting` -> `Ticket Release` -> `Mobile Ticket` (Vé ảo).
  * *Mở rộng:* Nhấn nút "Chỉ dẫn" trên vé ảo để xem bản đồ, nhấn "X" để đóng vé về Dashboard.

### 2. Luồng Sinh Viên Ra Bãi & Thanh toán (Student Exit Flow)
* **Mobile:** Từ Dashboard, nhấn nút **Top Up**. Trải nghiệm kịch bản ghi nợ (Flow 3) hoặc miễn phí (Flow 1). Sau khi hoàn tất, App tự động quay lại Dashboard và thông báo thành công.
* **Kiosk:** Chuyển sang màn hình **Cổng Ra** -> Nhấn **Quét thẻ**.
* **Kỳ vọng:** Kiosk báo thành công, xe ra khỏi bãi an toàn.

### 3. Luồng Khách Vãng Lai (Visitor Flow)
* **Mobile:** Tại màn hình Gateway ban đầu, nhấn vào khu vực lấy vé cho Khách (nửa dưới màn hình). App tạo vé ảo thành công.
* **Kiosk (Lúc ra):** Chọn **Cổng Ra** -> Nhấn chọn **Visitor Scan** -> Kiosk hiện mã QR thanh toán chuyển khoản.
* **Kiosk:** Nhấn vào màn hình QR để giả lập đã thanh toán xong (Bill Completed).
* **Kỳ vọng:** Màn hình Mobile của Khách lập tức nhận được thông báo thanh toán thành công, tự động xóa vé ảo và quay về giao diện Gateway ban đầu.

### 4. Luồng Quản Trị Viên (Admin Flow)
* **Mobile (Simulator):** Quay lại màn hình Login (`uc01_login_mobile.html`), đăng nhập với tài khoản Admin (User: `admin` / Pass: `admin`).
* **Kỳ vọng:** Simulator tự động phóng to thành kích thước màn hình Desktop (Macbook) và tải giao diện Admin Dashboard.
* **Test Menu Admin:** Trải nghiệm nhấp mượt mà giữa các tab menu bên trái: `Dashboard` -> `Giám sát bãi xe (Map)` -> `Quản lý thiết bị` -> `Nhật ký hệ thống`.

---

## 🐛 Debugging Guide
* Nếu các màn hình không nhận tín hiệu của nhau: Kiểm tra xem tất cả các tab trình duyệt có đang chạy chung một domain (ví dụ: `http://127.0.0.1:5500`) hay không. **TUYỆT ĐỐI KHÔNG** click đúp mở trực tiếp file html (dạng `file:///C:/...`).
* Xóa LocalStorage: Nếu luồng bị kẹt, nhấn `F12` -> Application -> Storage -> Local Storage -> Xóa các key `gate_event`, `visitor_event`, `student_payment` để reset lại từ đầu.

## 👥 Contributors
Developed by the CE & CS Engineering Team @ HCMUT.
