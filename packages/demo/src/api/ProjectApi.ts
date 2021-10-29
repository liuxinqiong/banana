import type { ProjectDO } from '@/models/project';

export default class ProjectApi {
  public static getProjectById(projectId: string): Promise<ProjectDO> {
    // use request to fetch data
    return Promise.resolve({ name: 'test' });
  }
}
