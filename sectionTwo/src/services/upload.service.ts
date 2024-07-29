import { CreateUploadDto } from '@/dtos/upload.dto';
import User from '@/models/users.model';
class UploadService {
	public uploadModel = User;
	public uploadFile = async (uploadData: CreateUploadDto) => {
		const upload = await this.uploadModel.create(uploadData);
		return upload;
	};
}

export default UploadService;
