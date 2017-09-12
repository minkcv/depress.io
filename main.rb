class A
    def self.Yes_it_is
    end
end
  
class B < A
    def self.Is_ruby_the_best_language
    end
    def self.No_it_isnt
    end
end
  
puts B.methods(false)