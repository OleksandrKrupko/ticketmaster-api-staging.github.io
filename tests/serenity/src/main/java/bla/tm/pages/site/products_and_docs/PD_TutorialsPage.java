package bla.tm.pages.site.products_and_docs;

import bla.tm.pages.AncestorPage;
import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import java.util.HashMap;
import java.util.Map;

@DefaultUrl("/products-and-docs/tutorials/")
public class PD_TutorialsPage extends AncestorPage {

    public final String pageHeader = "TICKETMASTER TUTORIALS";

    @FindBy(xpath = "//div[@class='announcement']/a[@href='/products-and-docs/tutorials/widgets/Event_Discovery_Widget.html' and text()='Learn more']")
    private WebElementFacade addingEventDiscoveryWidgetButton;

    @FindBy(xpath = "//div[@class='announcement']/h3/a[text()='Adding Event Discovery widget to a website']")
    private WebElementFacade addingEventDiscoveryWidgetHeaderLink;

    @FindBy(xpath = "//div[@class='tutorials-article']/a/img[@alt='Adding Event Discovery widget to a website']")
    private WebElementFacade addingEventDiscoveryWidgetImageLink;

    @FindBy(xpath = "//div[@class='announcement']/a[@href='/products-and-docs/tutorials/events-search/search_events_in_location.html' and text()='Learn more']")
    private WebElementFacade locateEventOnMapWidgetButton;

    @FindBy(xpath = "//div[@class='announcement']/h3/a[text()='Tutorial - Locate events on a map']")
    private WebElementFacade locateEventOnMapWidgetHeaderLink;

    @FindBy(xpath = "//div[@class='tutorials-article']/a/img[@alt='Tutorial - Locate events on a map']")
    private WebElementFacade locateEventOnMapWidgetImageLink;

    @FindBy(xpath = "//div[@class='announcement']/a[@href='/products-and-docs/tutorials/events-search/search_events_with_discovery_api.html' and text()='Learn more']")
    private WebElementFacade getStartedWithDiscoveryAPIWidgetButton;

    @FindBy(xpath = "//div[@class='announcement']/h3/a[text()='Get started with The Discovery API']")
    private WebElementFacade getStartedWithDiscoveryAPIWidgetHeaderLink;

    @FindBy(xpath = "//div[@class='tutorials-article']/a/img[@alt='Get started with The Discovery API']")
    private WebElementFacade getStartedWithDiscoveryAPIWidgetImageLink;

    public Map<String, WebElementFacade> getClickableElements() {
        Map<String, WebElementFacade> elements = new HashMap<String, WebElementFacade>();
        elements.put("Adding Event Discovery Widget Button", addingEventDiscoveryWidgetButton);
        elements.put("Adding Event Discovery Widget Header Link", addingEventDiscoveryWidgetHeaderLink);
        elements.put("Adding Event Discovery Widget Image Link", addingEventDiscoveryWidgetImageLink);
        elements.put("Locate Event On Map Widget Button", locateEventOnMapWidgetButton);
        elements.put("Locate Event On Map Widget Header Link", locateEventOnMapWidgetHeaderLink);
        elements.put("Locate Event On Map Widget Image Link", locateEventOnMapWidgetImageLink);
        elements.put("Get Started WIth Discovery API Widget Button", getStartedWithDiscoveryAPIWidgetButton);
        elements.put("Get Started WIth Discovery API Widget Header Link", getStartedWithDiscoveryAPIWidgetHeaderLink);
        elements.put("Get Started WIth Discovery API Widget Image Link", getStartedWithDiscoveryAPIWidgetImageLink);
        return elements;
    }
}
