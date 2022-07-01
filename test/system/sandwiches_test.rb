require "application_system_test_case"

class SandwichesTest < ApplicationSystemTestCase
  setup do
    @sandwich = sandwiches(:one)
  end

  test "visiting the index" do
    visit sandwiches_url
    assert_selector "h1", text: "Sandwiches"
  end

  test "should create sandwich" do
    visit sandwiches_url
    click_on "New sandwich"

    fill_in "Bread", with: @sandwich.bread
    fill_in "Cheese", with: @sandwich.cheese
    fill_in "Meat", with: @sandwich.meat
    click_on "Create Sandwich"

    assert_text "Sandwich was successfully created"
    click_on "Back"
  end

  test "should update Sandwich" do
    visit sandwich_url(@sandwich)
    click_on "Edit this sandwich", match: :first

    fill_in "Bread", with: @sandwich.bread
    fill_in "Cheese", with: @sandwich.cheese
    fill_in "Meat", with: @sandwich.meat
    click_on "Update Sandwich"

    assert_text "Sandwich was successfully updated"
    click_on "Back"
  end

  test "should destroy Sandwich" do
    visit sandwich_url(@sandwich)
    click_on "Destroy this sandwich", match: :first

    assert_text "Sandwich was successfully destroyed"
  end
end
