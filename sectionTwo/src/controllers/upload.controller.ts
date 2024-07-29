import { CreateUploadDto } from '@/dtos/upload.dto';
import UploadService from '@/services/upload.service';

class UploadController {
	public upload = new UploadService();

	async uploadFile(req, res) {
		try {
			const uploadData: CreateUploadDto = req.body;
			const result = await this.upload.uploadFile(uploadData);
			if (!result) {
				res.status(400).json({ message: 'Unable to upload file' });
			}
			res.status(201).json({ data: result, message: 'File uploaded successfully' });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

export default UploadController;
