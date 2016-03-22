require 'rails_helper'
require 'pry'

# Feature: Search
feature "Search Feature", type: :feature, js: true do
  background do
    visit root_path

    using_wait_time 10 do
      expect(page).to have_css('div.overlay-wrapper div.overlay')
      div = find('div.overlay-wrapper div.overlay')
      expect(div).to have_xpath('//button')
      div.find('button').click
      expect(page).to have_css('div#wheelmap div.ember-view')
    end
  end

  describe "Simple search" do
    it "is possible to search for 'Herborn in search input field'" do
      expect(page).to have_css('input#search')
      search = find(:css, 'input#search')
      search.set('herborn')
      expect(search.value).to eq('herborn')

      click_button('Finden')

      expect(page.current_url).to end_with('/search?q=herborn')
    end
  end
end
