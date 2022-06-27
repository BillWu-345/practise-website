module ApplicationHelper

  # Returns the full title on a per-page basis.
  def full_title(page_title = '')
    base_title = "Bill's Practise Website"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end

  # Simonsays game logic code:
  def initialization
    $blue = 0
  end

  def redvalue(red)
    return ($blue.to_i + red.to_i)
  end

  def red
    $blue = 3
  end
end
