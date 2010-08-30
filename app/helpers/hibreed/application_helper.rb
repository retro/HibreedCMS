module Hibreed::ApplicationHelper
  def render_menu
    rendered_menu = ['<ul id="main_menu">']

    menu_items.each do |title, link|
      id = "#{title.underscore}-link"
      if link.is_a? String or (link.is_a? Array and link.size > 0)
        rendered_menu << %Q(<li class="button">)
        if link.is_a? String
          rendered_menu << %Q(<a  id="#{id}" href="#{link}">#{title}</a>)
        elsif link.is_a? Array
          rendered_menu << %Q(<a  id="#{id}" href="#">#{title}</a>)
          rendered_menu << '<ul class="main-menu-links">'
            link.each do |title, link|
              rendered_menu << %Q(<li><a href="#{link}">#{title}</a></li>)
            end
          
          rendered_menu << '</ul>'
        end
        rendered_menu << "</li>"
      end
    end
  
    rendered_menu << '</ul>'
    rendered_menu.join.html_safe
  end
end
