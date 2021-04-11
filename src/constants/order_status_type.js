const CREATED = 'CREATED';
const IN_PROGRESS = 'IN_PROGRESS';
const COMPLETED = 'COMPLETED';
const CANCELLED = 'CANCELLED';

export const statusDescription = (status) => {
    switch (status) {
        case CREATED:
            return "Đã tạo"
        case IN_PROGRESS:
            return "Đang xử lí"
        case COMPLETED:
            return "Hoàn thành"
        case CANCELLED:
            return "Đã hủy"        
        default:
            return ""
    }
}