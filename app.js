// const student = {
//     id:10 ,
//     name:'Maryam',
//     degree:[20,30,40] ,
//     total:200
// }
// console.log(student)

const fs=require('fs')
const data=require('./students')
const yargs = require('yargs');
// console.log(yargs.argv)
const process = require('process');
console.log(yargs.argv)


const { number, describe, array, demand, demandOption } = require('yargs')
yargs.command({
  command:'add',
  describe: 'Add Student Data',
  builder:{
    id:{
        describe:'Studenets Unique id',
        demandOption:true ,
        type: 'number'
    },
    name:{
    describe:'Name of student',
    demandOption: true ,
    type:'string'
},
   degree: {
    describe:'Degree of students mark',
    demandOption: true,
    type:'array'   
},
},
handler:() => {
    data.addData(yargs.argv.id,yargs.argv.name,yargs.argv.degree)

}
})
yargs.command({
    command:'delete',
    describe: 'Delete Student Data',
    builder:{
      id:{
          describe:'Studenets Unique id',
          demandOption:true ,
          type: 'number'
      },
      name:{
      describe:'Name of student',
      demandOption: false ,
      type:'string'
  },
     degree: {
      describe:'Degree of students mark',
      demandOption: false,
      type:'array'   
  },
  },
  handler:() => {
      data.deleteData(yargs.argv.id)
  }
  })

  yargs.command({
    command:'read',
    describe:'This is read students data',
    builder:{
        id:{
            describe:'Id of student to read data',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
data.readData(yargs.argv.id)    }
 })

 yargs.command({
    command:'list',
    describe:'List of data students',
    handler:()=> {
        data.listData()
    }
 })

yargs.parse()