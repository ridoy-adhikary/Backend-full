import mongoose from 'monoose'

const subTodoSchema= new.mongoose.Schema(
{
  content:
  {
    type: String,
    required: true
  },
  complete:
  {
    type: Boolean,
    default: false
  },
  createdBy:
  {
    type: mogoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, 
{
  timestemps: true
}
)



export const SubTodo= mongoose.model("subTodo", subTodoSchema)