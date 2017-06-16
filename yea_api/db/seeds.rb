# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Poll.delete_all
Response.delete_all



Poll.create({
  title: "Where is good for lunch?",
  details: "I need more lunch ideas!",
  open: true,
  user_id: 1
  })

Poll.create({
  title: "Where shall we go to the pub?",
  details: "Sick of Footlights",
  open: true,
  user_id: 1
  })

  Response.create({
    user_id: 1,
    rating: 2,
    visible:true,
    poll_id: 4,
    body: "let's go to wagamama!"

    })
