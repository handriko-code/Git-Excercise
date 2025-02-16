interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    batchId: number;
  }
  
  interface IBatch {
    id: number;
    code: string;
    programId: number;
  }
  
  interface IProgram {
    id: number;
    name: string;
  }
  

  let listProgram: IProgram[] = [];
  function Program(id: number, name:string ) {

     
      //function createProgram(name: string) {
      if (listProgram.find((x) => x.name === name)) {
        return "Program already exists";
      }
  
      listProgram.push({
        id: id++,
        name,
      });
  
      return "Program added";
    }
    
  
    function deleteProgram(name: string) {
      const program = listProgram.find((x) => x.name === name);
      if (!program) {
        return "Program does not exists";
      }
  
      listProgram = listProgram.filter((x) => x.name !== name);
  
      return "Program removed";
    }
  
    function findAll() {
      return listProgram;
       }
  
  
  function Batch (id: number) {
       let listBatch: IBatch[] = [];
  
    findProgramById(programId: number, programs: IProgram[]): IProgram | null {
      if (programs.length < 1) {
        return null;
      }
  
      const findProgramById = programs.find((x) => x.id === programId);
  
      if (!findProgramById) {
        return null;
      }
  
      return findProgramById;
    }
  
    function createBatch(programId: number, programs: IProgram[] = []) {
      let code = "";
      let lastProgram = this.#findProgramById(programId, programs);
      if (!lastProgram) {
        return "Program doesnt exists";
      }
      let lastBatch = this.#listBatch.filter((x) => x.programId === programId)[
        this.#listBatch.length - 1
      ];
      if (lastBatch) {
        code =
          lastProgram.name.substring(0, 6) +
          "-" +
          (Number(lastBatch.code.substring(7)) + 1);
      } else {
        code += lastProgram.name.substring(0, 6) + "-1";
      }
  
      this.#listBatch.push({
        id: this.#id++,
        code,
        programId,
      });
    }
  
    findAll() {
      return this.#listBatch;
    }
  }
  
  class Student {
    #id: number = 1;
    #students: IStudent[] = [];
  
    #findStudentByBatchId(batchId: number) {
      return this.#students.find((x) => x.batchId === batchId);
    }
  
    createStudent(
      firstName: string,
      lastName: string,
      age: number,
      batchId: number,
      batches: IBatch[]
    ) {
      if (batches.length > 0) {
        const sameBatch = this.#findStudentByBatchId(batchId);
        if (sameBatch) {
          return "Batch already exist for this student";
        }
        this.#students.push({
          id: this.#id++,
          firstName,
          lastName,
          age,
          batchId,
        });
      }
    }
  
    findAll() {
      return this.#students;
    }
  }
  
  const newProgram = Program(1,"JCWDOL");
 
  
//   const newBatch = new Batch();
//   newBatch.createBatch(1, newProgram.findAll());
//   newBatch.createBatch(1, newProgram.findAll());
//   newProgram.deleteProgram("JCWDOL");
//   newBatch.createBatch(1, newProgram.findAll());
//   newProgram.createProgram("JCWDOL");
//   newProgram.createProgram("JCDMOL");
//   newBatch.createBatch(3, newProgram.findAll());
  
//   console.log(newProgram.findAll());
//   console.log(newBatch.findAll());
  
//   const newStudent = new Student();
//   newStudent.createStudent("budi", "john", 22, 2, newBatch.findAll());
//   newStudent.createStudent("budi", "john", 22, 1, newBatch.findAll());
//   newStudent.createStudent("budi", "john", 22, 2, newBatch.findAll());
  
//   console.log(newStudent.findAll());
  