import { mapEmployeeSummaryListFromApiToVm, mapProjectFromApiToVm } from './project.mapper';
import { EmployeeSummary, Project } from './project.vm';

describe('mapEmployeeSummaryListFromApiToVm', () => {
  it('should map employee summary list from API to view model', () => {
    const mockEmployeeSummaryList: EmployeeSummary[] = [
      { id: '1', employeeName: 'Daniel Perez', isAssigned: true },
      { id: '2', employeeName: 'Jose Sanchez', isAssigned: false },
      { id: '3', employeeName: 'Javier Benitez', isAssigned: false },
      { id: '4', employeeName: 'María Peña', isAssigned: true },
    ];

    const result = mapEmployeeSummaryListFromApiToVm(mockEmployeeSummaryList);

    expect(result).toEqual(mockEmployeeSummaryList);
  });
});

describe('mapProjectFromApiToVm', () => {
  it('should map project from API to view model', () => {
    const mockProjectFromApi = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        { id: '1', employeeName: 'Daniel Perez', isAssigned: true },
        { id: '2', employeeName: 'Jose Sanchez', isAssigned: false },
        { id: '3', employeeName: 'Javier Benitez', isAssigned: false },
        { id: '4', employeeName: 'María Peña', isAssigned: true },
      ],
    };

    const expectedProject: Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        { id: '1', employeeName: 'Daniel Perez', isAssigned: true },
        { id: '2', employeeName: 'Jose Sanchez', isAssigned: false },
        { id: '3', employeeName: 'Javier Benitez', isAssigned: false },
        { id: '4', employeeName: 'María Peña', isAssigned: true },
      ],
    };

    const result = mapProjectFromApiToVm(mockProjectFromApi);

    expect(result).toEqual(expectedProject);
  });
});
