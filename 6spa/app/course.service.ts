// Naming convention for file - servicename.service.ts
// service is also a plain class
export class CourseService {
	getCourses(): string[] {
		return ["Course1", "Course2", "Course3"];
	}
}