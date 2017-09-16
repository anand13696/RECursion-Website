class Question < ApplicationRecord
	
	has_many :answers
	has_many :upvotes
	belongs_to :user
	has_many :comments
	has_many :follows
	has_many :taggings
	has_many :tags, through: :taggings

	def follow_count
		follows.count
	end

	def upvote_count
		upvotes.count
	end

	def answer_count
		answers.count
	end

	def all_tags=(names)
	  self.tags = names.split(",").map do |name|
	      Tag.where(name: name.strip).first_or_create!
	  end
	end

	def all_tags
	  self.tags.map(&:name).join(", ")
	end

	def self.tagged_with(name)
  		Tag.find_by_name!(name).questions
	end

end
