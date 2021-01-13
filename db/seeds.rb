# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Note.destroy_all
Notebook.destroy_all
User.destroy_all


ActiveRecord::Base.transaction do
    demoUser = User.create({ email: "demo@user.com", password: "$gk991uIOwf9"})
    
    notebook1 = Notebook.create({title: 'First Notebook', author_id: demoUser.id, first_notebook: true})
    notebook2 = Notebook.create({title: 'Second Notebook', author_id: demoUser.id})
    notebook3 = Notebook.create({title: 'Third Notebook', author_id: demoUser.id})

    note1 = Note.create({title: Faker::Space.planet, body: Faker::Quote.famous_last_words, notebook_id: notebook1.id, author_id: demoUser.id})
    note2 = Note.create({title: Faker::Space.star, body: Faker::Quote.famous_last_words, notebook_id: notebook2.id, author_id: demoUser.id})
    note3 = Note.create({title: Faker::Space.moon, body: Faker::Quote.famous_last_words, notebook_id: notebook3.id, author_id: demoUser.id})
    note4 = Note.create({title: Faker::Space.nebula, body: Faker::Quote.famous_last_words, notebook_id: notebook1.id, author_id: demoUser.id, trashed: true})
    note5 = Note.create({title: Faker::Space.galaxy, body: Faker::Quote.famous_last_words, notebook_id: notebook2.id, author_id: demoUser.id, trashed: true})
    note6 = Note.create({title: Faker::Space.agency, body: Faker::Quote.famous_last_words, notebook_id: notebook3.id, author_id: demoUser.id, trashed: true})

    tag1 = Tag.create({title: 'Jupiter', author_id: demoUser.id})
    tag2 = Tag.create({title: 'Comet', author_id: demoUser.id})
    tag3 = Tag.create({title: 'Pluto', author_id: demoUser.id})

    taggable1 = Taggable.create({note_id: note1.id, tag_id: tag1.id, author_id: demoUser.id})
    taggable2 = Taggable.create({note_id: note2.id, tag_id: tag2.id, author_id: demoUser.id})
    taggable3 = Taggable.create({note_id: note3.id, tag_id: tag3.id, author_id: demoUser.id})
end
# https://github.com/appacademy/bluebird/blob/master/db/seeds.rb
 
# User.destroy_all
# Chirp.destroy_all
# Like.destroy_all

# user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user4 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user5 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user6 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user7 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user8 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user9 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

# chirp1 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
# chirp2 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
# chirp3 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user1.id)
# chirp4 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)
# chirp5 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)
# chirp6 = Chirp.create(body: Faker::RickAndMorty.quote, author_id: user2.id)

# Like.create(user_id: user3.id, chirp_id: chirp1.id)
# Like.create(user_id: user4.id, chirp_id: chirp2.id)
# Like.create(user_id: user5.id, chirp_id: chirp3.id)
# Like.create(user_id: user3.id, chirp_id: chirp3.id)
# Like.create(user_id: user4.id, chirp_id: chirp1.id)
# Like.create(user_id: user5.id, chirp_id: chirp2.id)